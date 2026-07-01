declare const process: {
  env: Record<string, string | undefined>;
};

const json = (res: any, status: number, payload: Record<string, unknown>) => {
  res.status(status).json(payload);
};

const trim = (value: unknown) => (typeof value === "string" ? value.trim() : "");

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const sendViaResend = async ({
  from,
  to,
  replyTo,
  subject,
  html,
  text,
}: {
  from: string;
  to: string;
  replyTo?: string;
  subject: string;
  html?: string;
  text?: string;
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
      ...(replyTo ? { reply_to: replyTo } : {}),
      subject,
      ...(html ? { html } : {}),
      ...(text ? { text } : {}),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend error: ${errorText}`);
  }
};

// ─────────────────────────────────────────────────────────
// HTML email template sent to the USER who requested the brochure.
// Logo URL and social links are left as TODO placeholders below.
// ─────────────────────────────────────────────────────────
const buildUserEmailHtml = ({
  customerName,
  productName,
  brochureUrl,
}: {
  customerName: string;
  productName: string;
  brochureUrl: string;
}) => `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background-color:#f4f4f6;font-family:Arial, Helvetica, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f6;padding:24px 0;">
      <tr>
        <td align="center">
          <table width="100%" style="max-width:560px;background:#ffffff;border-radius:8px;overflow:hidden;">

            <!-- Header / Logo -->
            <tr>
              <td style="background-color:#0B192C;padding:24px;text-align:center;">
                <!-- TODO: replace src with your hosted Optimus logo URL -->
                <img src="TODO_LOGO_URL" alt="Optimus Marking" style="height:40px;" />
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:32px 28px;color:#333333;">
                <p style="font-size:15px;line-height:1.6;margin:0 0 16px 0;">
                  Dear ${customerName},
                </p>
                <p style="font-size:15px;line-height:1.6;margin:0 0 16px 0;">
                  Thank you for connecting with <strong>Optimus Marking</strong>.
                  Your requested brochure for <strong>${productName}</strong> is ready below.
                </p>

                <!-- Download button -->
                <table cellpadding="0" cellspacing="0" style="margin:24px 0;">
                  <tr>
                    <td style="background-color:#F97316;border-radius:4px;">
                      <a href="${brochureUrl}" target="_blank"
                        style="display:inline-block;padding:14px 28px;color:#ffffff;text-decoration:none;font-weight:bold;font-size:13px;text-transform:uppercase;letter-spacing:0.5px;">
                        Download Brochure
                      </a>
                    </td>
                  </tr>
                </table>

                <p style="font-size:13px;line-height:1.6;color:#666666;margin:0 0 24px 0;">
                  If the button doesn't work, copy and paste this link into your browser:<br/>
                  <a href="${brochureUrl}" style="color:#F97316;word-break:break-all;">${brochureUrl}</a>
                </p>

                <hr style="border:none;border-top:1px solid #eeeeee;margin:24px 0;" />

                <!-- Contact / WhatsApp / Website -->
                <table cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td style="font-size:13px;color:#333333;line-height:1.8;">
                      For more enquiries, contact us:<br/>
                      📞 Phone: <a href="tel:+917709249499" style="color:#0B192C;text-decoration:none;">+91 77092 49499</a><br/>
                      ✉️ Email: <a href="mailto:sales@optimusmarking.com" style="color:#0B192C;text-decoration:none;">sales@optimusmarking.com</a><br/>
                      🌐 Website: <a href="https://optimusmarking.com" style="color:#0B192C;text-decoration:none;">optimusmarking.com</a><br/>
                      💬 WhatsApp: <a href="https://wa.me/917709249499" style="color:#0B192C;text-decoration:none;">Chat with us</a>
                    </td>
                  </tr>
                </table>

                <!-- TODO: add social media icons/links here (LinkedIn, Instagram, Facebook, YouTube) -->

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background-color:#f4f4f6;padding:16px 28px;text-align:center;">
                <p style="font-size:11px;color:#999999;margin:0;">
                  This is an automated email from Optimus Marking Systems Pvt Ltd.
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

export default async function handler(req: any, res: any) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "no-referrer");

  if (req.method !== "POST") {
    return json(res, 405, { success: false, message: "Method not allowed." });
  }

  const name = trim(req.body?.name);
  const email = trim(req.body?.email);
  const phone = trim(req.body?.phone);
  const company = trim(req.body?.company);
  const productName = trim(req.body?.productName);
  const brochureUrl = trim(req.body?.brochureUrl);
  const honeypot = trim(req.body?.website);

  // Honeypot for bots: pretend success.
  if (honeypot) {
    return json(res, 200, { success: true, message: "Request accepted." });
  }

  if (!name || !email || !productName || !brochureUrl) {
    return json(res, 422, {
      success: false,
      message: "Name, email, product, and brochure are required.",
    });
  }

  if (!isValidEmail(email)) {
    return json(res, 422, {
      success: false,
      message: "Please provide a valid email address.",
    });
  }

  if (name.length > 120 || company.length > 160) {
    return json(res, 422, {
      success: false,
      message: "Input exceeds allowed length.",
    });
  }

  try {
    const fromAddress =
      process.env.CONTACT_FROM_EMAIL || "Optimus Marking <onboarding@resend.dev>";
    const teamEmail = process.env.CONTACT_TO_EMAIL;
    if (!teamEmail) {
      throw new Error("CONTACT_TO_EMAIL is not configured.");
    }

    // 1. Email the brochure to the user who filled the form.
    await sendViaResend({
      from: fromAddress,
      to: email,
      subject: `Your ${productName} Brochure - Optimus Marking`,
      html: buildUserEmailHtml({ customerName: name, productName, brochureUrl }),
    });

    // 2. Notify the Optimus sales/marketing team about this enquiry.
    const teamText =
      `New brochure download enquiry:\n\n` +
      `Product: ${productName}\n` +
      `Name: ${name}\n` +
      `Company: ${company || "-"}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone || "-"}\n` +
      `Brochure URL: ${brochureUrl}\n`;

    await sendViaResend({
      from: fromAddress,
      to: teamEmail,
      replyTo: email,
      subject: `Brochure Enquiry - ${productName}`,
      text: teamText,
    });

    // ─────────────────────────────────────────────────────
    // TODO (future, optional - paid WhatsApp API e.g. Twilio/Gupshup/Interakt):
    // If `phone` is provided and client wants brochure on WhatsApp too,
    // send it here via WhatsApp Business API. Currently NOT implemented
    // because it requires a paid provider. Phone number is only stored
    // / logged below for future use.
    //
    // Example (pseudo-code, uncomment & implement when API is ready):
    //
    // if (phone) {
    //   await sendViaWhatsAppAPI({
    //     to: phone,
    //     templateName: "brochure_share",
    //     params: [name, productName, brochureUrl],
    //   });
    // }
    // ─────────────────────────────────────────────────────

    return json(res, 200, {
      success: true,
      message: "Brochure sent to your email successfully.",
    });
  } catch (error) {
    return json(res, 500, {
      success: false,
      message:
        error instanceof Error ? error.message : "Unable to send brochure right now.",
    });
  }
}