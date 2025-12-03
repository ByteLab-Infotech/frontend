# Cloudflare Pages Deployment Guide

## Authentication Error Fix

If you're getting an authentication error like:
```
Authentication error [code: 10000]
Please ensure it has the correct permissions for this operation.
```

This means your API token doesn't have the required permissions for Cloudflare Pages deployment.

## Solution 1: Update API Token Permissions (Recommended for CI/CD)

1. Go to [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens)

2. Click **"Create Token"** or edit your existing token

3. Use the **"Edit Cloudflare Workers"** template, or create a custom token with these permissions:
   - **Account** → **Cloudflare Pages** → **Edit**
   - **Account** → **Account Settings** → **Read**
   - **Zone** → **Zone Settings** → **Read** (if using custom domains)

4. Set **Account Resources** to include your account: `91368a540db71a9ba81dc905f0b914de`

5. Save the token and update your `CLOUDFLARE_API_TOKEN` environment variable

## Solution 2: Use Wrangler Login (Recommended for Local Development)

Instead of using an API token, you can authenticate using your browser:

```bash
npx wrangler login
```

This will open your browser and authenticate using your Cloudflare account. This is easier for local development and doesn't require managing API tokens.

## Solution 3: Use Cloudflare Pages Dashboard

You can also deploy directly from the Cloudflare dashboard:

1. Go to [Cloudflare Pages](https://dash.cloudflare.com/pages)
2. Connect your GitHub repository
3. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `.next`
4. Deploy automatically on every push

## Deployment Commands

### Using API Token (after fixing permissions):
```bash
export CLOUDFLARE_API_TOKEN=your-token-here
npm run deploy:cloudflare
```

### Using Wrangler Login:
```bash
npx wrangler login
npm run deploy:cloudflare
```

### Manual Deployment:
```bash
npm run build
npx wrangler pages deploy .next
```

## Required API Token Permissions

For Cloudflare Pages deployment, your API token needs:

- **Cloudflare Pages** → **Edit** (to deploy and manage pages)
- **Account Settings** → **Read** (to read account information)
- **Zone Settings** → **Read** (if using custom domains)

## Troubleshooting

### Error: "Authentication error [code: 10000]"
- Check that your API token has the correct permissions
- Verify the token is set in `CLOUDFLARE_API_TOKEN` environment variable
- Try using `wrangler login` instead

### Error: "Project not found"
- Ensure the project name in `wrangler.jsonc` matches your Cloudflare Pages project
- Create the project first in the Cloudflare dashboard if it doesn't exist

### Error: "Build output directory not found"
- Run `npm run build` first to generate the `.next` directory
- Verify the `pages_build_output_dir` in `wrangler.jsonc` matches your build output


