# Deploying to Cloudflare Pages

This site is a **fully static Next.js export** (`output: 'export'`). No backend, no env vars, no API keys. Cloudflare Pages serves the `out/` directory directly.

## One-time setup

### 1. Push to GitHub

```bash
git add -A
git commit -m "your message"
git push origin master
```

### 2. Create the Pages project

1. Go to [Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git](https://dash.cloudflare.com).
2. Pick this repo (`theahmadzai/theahmadzai.github.io`).
3. Build settings:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Environment variable:** `NODE_VERSION=22`

That's it. Every push to `master` auto-deploys.

### 3. Custom domain

In **Pages → Custom domains**, add `javedahmadzai.com` and `www.javedahmadzai.com`. If the domain's nameservers are already on Cloudflare, the DNS records get added automatically.

### 4. Update LinkedIn

Once the site is live, update your LinkedIn portfolio URL to `https://javedahmadzai.com` (currently points to `theahmadzai.netlify.app`).

## Local preview of the production build

```bash
npm run build
npm run preview   # serves the static out/ on http://localhost:3000
```

## Optional: Cloudflare Web Analytics

Free, privacy-friendly, no cookies, no extra code needed. After deploy:

1. Cloudflare Dashboard → **Web Analytics** → **Add a site**
2. Pick the Pages project
3. Cloudflare auto-injects a tiny script — no code changes required.
