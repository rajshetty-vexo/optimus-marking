# Optimus Hexasite

## Contact Form on Vercel

The contact form is implemented via a Vercel Serverless Function at `api/contact.ts`.

### Required Environment Variables (Vercel Project Settings)

- `VITE_ENABLE_RECAPTCHA` - Set to `true` to enable reCAPTCHA checks (default behavior can remain disabled for initial setup)
- `RECAPTCHA_ENABLED` - Set to `true` to enforce server-side reCAPTCHA verification
- `VITE_RECAPTCHA_SITE_KEY` - Google reCAPTCHA v3 site key (required only when enabled)
- `RECAPTCHA_SECRET_KEY` - Google reCAPTCHA v3 secret key (required only when enabled)
- `RESEND_API_KEY` - Resend API key used to send email
- `CONTACT_TO_EMAIL` - Recipient inbox (example: `sales@optimusmarking.com`)
- `CONTACT_FROM_EMAIL` - Verified sender for Resend (example: `Optimus Website <onboarding@resend.dev>`)

### Notes

- The recipient email is not exposed in client-side request payload.
- A honeypot field and server-side validation are enabled to reduce spam.
- reCAPTCHA can be switched on with `VITE_ENABLE_RECAPTCHA=true` and `RECAPTCHA_ENABLED=true`.
