# Optimus Hexasite

Industrial coding and marking website built with Vite + React and deployed on Vercel.

## Contact Form Architecture

The contact form is implemented with a Vercel Serverless Function:

- API route: `api/contact.ts`
- Email provider: Resend API
- Anti-spam layers:
  - Honeypot field
  - Server-side input validation
  - Optional reCAPTCHA v3 verification

## Environment Variables (Vercel)

Set these in **Vercel Project Settings -> Environment Variables**.

### Required for mail sending

- `RESEND_API_KEY`  
  Resend API key
- `CONTACT_TO_EMAIL`  
  Recipient inbox (example: `sales@optimusmarking.com`)
- `CONTACT_FROM_EMAIL`  
  Verified sender identity in Resend (example: `Optimus Website <onboarding@resend.dev>`)

### Optional (recommended) for reCAPTCHA

- `VITE_ENABLE_RECAPTCHA`  
  `true` to enable frontend token generation, `false` to disable
- `RECAPTCHA_ENABLED`  
  `true` to enforce verification on server
- `VITE_RECAPTCHA_SITE_KEY`  
  Google reCAPTCHA v3 site key
- `RECAPTCHA_SECRET_KEY`  
  Google reCAPTCHA v3 secret key

## Security Checklist (Production)

- Keep all secrets only in Vercel env vars (never commit `.env` files).
- Set `VITE_ENABLE_RECAPTCHA=true` and `RECAPTCHA_ENABLED=true` before going live.
- Use a verified `CONTACT_FROM_EMAIL` domain in Resend.
- Rotate `RESEND_API_KEY` periodically.
- Test API endpoint:
  - Valid request sends mail
  - Honeypot-filled request is ignored
  - Invalid email/request is rejected
- Confirm headers from `vercel.json` are active:
  - `X-Content-Type-Options`
  - `X-Frame-Options`
  - `Referrer-Policy`
  - `Permissions-Policy`

## Deploy on Vercel (Step-by-Step)

1. Push your latest code to GitHub.
2. Go to [Vercel](https://vercel.com/) -> **Add New Project**.
3. Import this GitHub repository.
4. Framework preset should auto-detect as **Vite**.
5. Add environment variables listed above.
6. Click **Deploy**.
7. After deploy, open your Vercel domain and test:
   - Homepage rendering
   - Contact form submission
   - Email delivery to `CONTACT_TO_EMAIL`

## Post-Deploy Validation

- Open `https://your-domain/robots.txt` and `https://your-domain/sitemap.xml`.
- Inspect page source for canonical, Open Graph, Twitter, and JSON-LD tags.
- Run Lighthouse (SEO + Best Practices checks).
- Test contact form from desktop and mobile.
