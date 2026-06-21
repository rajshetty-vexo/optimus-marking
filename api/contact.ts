declare const process: {
  env: Record<string, string | undefined>;
};

const json = (res: any, status: number, payload: Record<string, unknown>) => {
  res.status(status).json(payload);
};

const trim = (value: unknown) => (typeof value === "string" ? value.trim() : "");

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const verifyRecaptcha = async (token: string, remoteIp?: string) => {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    throw new Error("RECAPTCHA_SECRET_KEY is not configured.");
  }

  const body = new URLSearchParams({
    secret,
    response: token,
  });
  if (remoteIp) {
    body.append("remoteip", remoteIp);
  }

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  if (!response.ok) {
    throw new Error("Unable to verify reCAPTCHA.");
  }

  const result = (await response.json()) as {
    success?: boolean;
    score?: number;
    action?: string;
  };

  return Boolean(result.success) && (result.score ?? 1) >= 0.5;
};

const sendViaResend = async ({
  from,
  to,
  replyTo,
  subject,
  text,
}: {
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  text: string;
}) => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: replyTo,
      subject,
      text,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend error: ${errorText}`);
  }
};

export default async function handler(req: any, res: any) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "no-referrer");

  if (req.method !== "POST") {
    return json(res, 405, { success: false, message: "Method not allowed." });
  }

  const name = trim(req.body?.name);
  const company = trim(req.body?.company);
  const email = trim(req.body?.email);
  const message = trim(req.body?.message);
  const honeypot = trim(req.body?.website);
  const recaptchaToken = trim(req.body?.recaptchaToken);
  const recaptchaEnabled = process.env.RECAPTCHA_ENABLED === "true";

  // Honeypot for bots: pretend success.
  if (honeypot) {
    return json(res, 200, { success: true, message: "Request accepted." });
  }

  if (!name || !email || !message) {
    return json(res, 422, {
      success: false,
      message: "Name, email, and message are required.",
    });
  }

  if (!isValidEmail(email)) {
    return json(res, 422, {
      success: false,
      message: "Please provide a valid email address.",
    });
  }

  if (name.length > 120 || company.length > 160 || message.length > 3000) {
    return json(res, 422, {
      success: false,
      message: "Input exceeds allowed length.",
    });
  }

  if (recaptchaEnabled && !recaptchaToken) {
    return json(res, 422, {
      success: false,
      message: "reCAPTCHA validation failed.",
    });
  }

  try {
    if (recaptchaEnabled) {
      const recaptchaOk = await verifyRecaptcha(
        recaptchaToken,
        req.headers["x-forwarded-for"] as string
      );
      if (!recaptchaOk) {
        return json(res, 403, {
          success: false,
          message: "reCAPTCHA verification failed.",
        });
      }
    }

    const to = process.env.CONTACT_TO_EMAIL;
    if (!to) {
      throw new Error("CONTACT_TO_EMAIL is not configured.");
    }

    const from = process.env.CONTACT_FROM_EMAIL || "Optimus Website <onboarding@resend.dev>";
    const subject = "New Enquiry - Optimus Marking Website";
    const text =
      `New website enquiry received:\n\n` +
      `Name: ${name}\n` +
      `Company: ${company || "-"}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}\n`;

    await sendViaResend({
      from,
      to,
      replyTo: email,
      subject,
      text,
    });

    return json(res, 200, {
      success: true,
      message: "Thanks! Your enquiry has been sent.",
    });
  } catch (error) {
    return json(res, 500, {
      success: false,
      message: error instanceof Error ? error.message : "Unable to send enquiry right now.",
    });
  }
}
