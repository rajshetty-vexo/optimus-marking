declare const process: {
  env: Record<string, string | undefined>;
};

const json = (res: any, status: number, payload: Record<string, unknown>) => {
  res.status(status).json(payload);
};

const trim = (value: unknown) => (typeof value === "string" ? value.trim() : "");

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// ─────────────────────────────────────────────────────────────────────────────
// Optimus company brochure URL — sent with EVERY product brochure email
// TODO: Replace with actual Optimus company brochure Google Drive / Cloudinary URL
// Format: https://drive.google.com/uc?export=download&id=YOUR_FILE_ID
// ─────────────────────────────────────────────────────────────────────────────
const OPTIMUS_COMPANY_BROCHURE_URL = "https://drive.google.com/uc?export=download&id=1c3EsiWdFpvxzs4cE09BE4rHKthuPI-ol";

// ─────────────────────────────────────────────────────────────────────────────
// Optimus logo URL for email header
// TODO: Replace with actual hosted logo URL (Cloudinary PNG recommended)
// e.g. https://res.cloudinary.com/rjfewkks/image/upload/Optimus_Logo_without_BG_hkgraw.png
// ─────────────────────────────────────────────────────────────────────────────
const OPTIMUS_LOGO_URL = "https://res.cloudinary.com/rjfewkks/image/upload/v1782842101/Optimus_Logo_without_BG_hkgraw.png";

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
  if (!apiKey) throw new Error("RESEND_API_KEY is not configured.");

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

// ─────────────────────────────────────────────────────────────────────────────
// Email template — sent to USER
// Contains: product brochure button + Optimus company brochure button
// ─────────────────────────────────────────────────────────────────────────────
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
  <body style="margin:0;padding:0;background-color:#f4f4f6;font-family:Arial,Helvetica,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f6;padding:24px 0;">
      <tr>
        <td align="center">
          <table width="100%" style="max-width:580px;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">

            <!-- Header: Navy + Logo -->
            <tr>
              <td style="padding:24px 28px;text-align:center;">
                <img src="${OPTIMUS_LOGO_URL}" alt="Optimus Marking" style="height:44px;display:inline-block;" />
              </td>
            </tr>

            <!-- Orange accent line -->
            <tr>
              <td style="background-color:#F97316;height:4px;font-size:0;line-height:0;">&nbsp;</td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:32px 28px 24px;color:#333333;">

                <p style="font-size:16px;line-height:1.6;margin:0 0 8px 0;">
                  Dear <strong>${customerName}</strong>,
                </p>
                <p style="font-size:15px;line-height:1.6;margin:0 0 24px 0;color:#555555;">
                  Thank you for connecting with <strong style="color:#0B192C;">Optimus Marking</strong>.
                  Your requested brochure for <strong style="color:#F97316;">${productName}</strong> is ready below.
                </p>

                <!-- ── Product Brochure Button ── -->
                <p style="font-size:13px;font-weight:700;color:#0B192C;margin:0 0 10px 0;text-transform:uppercase;letter-spacing:0.5px;">
                  ${productName} Brochure
                </p>
                <table cellpadding="0" cellspacing="0" style="margin:0 0 8px 0;">
                  <tr>
                    <td style="background-color:#F97316;border-radius:4px;">
                      <a href="${brochureUrl}" target="_blank"
                        style="display:inline-block;padding:13px 28px;color:#ffffff;text-decoration:none;font-weight:bold;font-size:13px;text-transform:uppercase;letter-spacing:0.5px;">
                        ↓ Download ${productName} Brochure
                      </a>
                    </td>
                  </tr>
                </table>
                <p style="font-size:12px;color:#999999;margin:0 0 28px 0;">
                  If button doesn't work:
                  <a href="${brochureUrl}" style="color:#F97316;word-break:break-all;">${brochureUrl}</a>
                </p>

                <!-- ── Optimus Company Brochure Button ── -->
                <p style="font-size:13px;font-weight:700;color:#0B192C;margin:0 0 10px 0;text-transform:uppercase;letter-spacing:0.5px;">
                  Optimus Marking Brochure
                </p>
                <table cellpadding="0" cellspacing="0" style="margin:0 0 8px 0;">
                  <tr>
                    <td style="background-color:#0B192C;border-radius:4px;">
                      <a href="${OPTIMUS_COMPANY_BROCHURE_URL}" target="_blank"
                        style="display:inline-block;padding:13px 28px;color:#ffffff;text-decoration:none;font-weight:bold;font-size:13px;text-transform:uppercase;letter-spacing:0.5px;">
                        ↓ Download Company Brochure
                      </a>
                    </td>
                  </tr>
                </table>
                <p style="font-size:12px;color:#999999;margin:0 0 28px 0;">
                  Explore our full range of coding, marking &amp; labelling solutions.
                </p>

                <hr style="border:none;border-top:1px solid #eeeeee;margin:24px 0;" />

                <!-- Contact info -->
                <table cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td style="font-size:13px;color:#555555;line-height:2;">
                      <strong style="color:#0B192C;">For more enquiries:</strong><br/>
                      📞 <a href="tel:+917709249499" style="color:#0B192C;text-decoration:none;">+91 77092 49499</a><br/>
                      ✉️ <a href="mailto:sales@optimusmarking.com" style="color:#0B192C;text-decoration:none;">sales@optimusmarking.com</a><br/>
                      🌐 <a href="https://optimusmarking.com" style="color:#0B192C;text-decoration:none;">optimusmarking.com</a><br/>
                      💬 <a href="https://wa.me/917709249499" style="color:#0B192C;text-decoration:none;">WhatsApp: Chat with us</a>
                    </td>
                  </tr>
                </table>
                   
                <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #e2e8f0;">
                  <p style="margin: 0 0 10px 0; font-family: sans-serif; font-size: 11px; font-weight: bold; tracking-changed: 2px; text-transform: uppercase; color: #1E1951; letter-spacing: 1.5px;">
                  Follow us on
                  </p>
                <table cellpadding="0" cellspacing="0" style="margin-top:20px;">
                  <tr>
                    <td style="padding-right:12px;">
                      <a href="https://www.linkedin.com/company/optimus-marking-systems-private-limited/"><img src="https://res.cloudinary.com/rjfewkks/image/upload/v1783518263/Linkdin_icon_wh7mxy.png" width="28" alt="LinkedIn"/></a>
                    </td>
                    <td style="padding-right:12px;">
                      <a href="https://www.instagram.com/optimusmarking/"><img src="https://res.cloudinary.com/rjfewkks/image/upload/v1783518264/Instagram_icon_shsvje.png" width="28" alt="Instagram"/></a>
                    </td>
                    <td style="padding-right:12px;">
                      <a href="https://youtube.com/@optimusmarkingsystem?si=s8ybXWP8lnB8ErLj"><img src="https://res.cloudinary.com/rjfewkks/image/upload/v1783518264/Youtube_icon_qwpbai.png" width="28" alt="YouTube"/></a>
                    </td>
                    <td style="padding-right:12px;">
                      <a href="https://x.com/optimusmarking"><img src="https://res.cloudinary.com/rjfewkks/image/upload/v1783518264/X_lcon_mq54iu.jpg" width="28" alt="X"/></a>
                    </td>
                  </tr>
                </table>
                </div>
            

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background-color:#f4f4f6;padding:16px 28px;text-align:center;border-top:1px solid #eeeeee;">
                <p style="font-size:11px;color:#aaaaaa;margin:0;">
                  This is an automated email from Optimus Marking Systems Pvt Ltd.<br/>
                  2, Vitthal Park, Manjari BK, Pune - 412307
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

  const name        = trim(req.body?.name);
  const email       = trim(req.body?.email);
  const phone       = trim(req.body?.phone);
  const company     = trim(req.body?.company);
  const productName = trim(req.body?.productName);
  const brochureUrl = trim(req.body?.brochureUrl);
  const honeypot    = trim(req.body?.website);

  // Honeypot — bot se protect karo
  if (honeypot) {
    return json(res, 200, { success: true, message: "Request accepted." });
  }

  if (!name || !email || !productName || !brochureUrl) {
    return json(res, 422, { success: false, message: "Name, email, product, and brochure are required." });
  }

  if (!isValidEmail(email)) {
    return json(res, 422, { success: false, message: "Please provide a valid email address." });
  }

  if (name.length > 120 || company.length > 160) {
    return json(res, 422, { success: false, message: "Input exceeds allowed length." });
  }

  try {
    const fromAddress = process.env.CONTACT_FROM_EMAIL || "Optimus Marking <onboarding@resend.dev>";
    const teamEmail   = process.env.CONTACT_TO_EMAIL;
    if (!teamEmail) throw new Error("CONTACT_TO_EMAIL is not configured.");

    // 1. User ko email bhejo — product brochure + company brochure dono
    await sendViaResend({
      from: fromAddress,
      to: email,
      subject: `Your ${productName} Brochure — Optimus Marking`,
      html: buildUserEmailHtml({ customerName: name, productName, brochureUrl }),
    });

    // 2. Optimus team ko enquiry notification bhejo
    await sendViaResend({
      from: fromAddress,
      to: teamEmail,
      replyTo: email,
      subject: `Brochure Enquiry — ${productName}`,
      text:
        `New brochure download enquiry:\n\n` +
        `Product:      ${productName}\n` +
        `Name:         ${name}\n` +
        `Company:      ${company || "-"}\n` +
        `Email:        ${email}\n` +
        `Phone:        ${phone || "-"}\n` +
        `Brochure URL: ${brochureUrl}\n`,
    });

    // ── TODO (future): WhatsApp API integration ──────────────────────────────
    // Uncomment when paid WhatsApp API (Twilio/Gupshup/Interakt) is ready:
    // if (phone) {
    //   await sendViaWhatsAppAPI({ to: phone, templateName: "brochure_share", params: [name, productName, brochureUrl] });
    // }
    // ─────────────────────────────────────────────────────────────────────────

    return json(res, 200, { success: true, message: "Brochure sent to your email successfully." });

  } catch (error) {
    return json(res, 500, {
      success: false,
      message: error instanceof Error ? error.message : "Unable to send brochure right now.",
    });
  }
}