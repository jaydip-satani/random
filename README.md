# Random Password Generator

> A small, well-structured Next.js app scaffolded for rapid experimentation and small web utilities. This repository contains a lightweight TypeScript + Next.js (app-router) codebase with a tiny API route and static/public assets. The README below explains how to get started, the project layout, common commands, and recommended next steps.

## Live Demo

👉 **[View the Live App](https://random.jaydipsatani.com)**

## Why this repo

This project is designed to be an easy-to-run, easy-to-extend starter for small utilities, prototypes, or demos. It contains a minimal app structure, a namespaced API route, and a public asset folder so you can focus on building features instead of tooling.

## Quick contract

- Inputs: HTTP requests to the app (browser or API clients); developer edits to files.
- Outputs: Server-rendered pages under `app/`, API responses from `app/api/`, and static assets served from `public/`.
- Success: `npm run dev` starts a local dev server and the app loads at http://localhost:3000.
- Error modes: missing dependencies, Node.js version incompatibilities, or port conflicts. See troubleshooting below.

## Project layout (top-level)

- `app/` — Next.js app directory (routes, pages, components, global styles).
  - `api/` — Serverless routes. There's a `generate/route.ts` available for small API functionality.
- `public/` — Static assets (images, icons, etc.).
- `package.json`, `tsconfig.json`, `next.config.ts` — Project configuration and scripts.

> Note: This layout follows Next.js modern conventions using the app router and TypeScript. If you change routing or server behavior, look inside `app/` first.

## Requirements

- Node.js 18 or newer (LTS recommended)
- npm (or yarn/pnpm — adjust commands accordingly)

## Setup — first time

1. Install dependencies:

```
npm install
```

2. Start the dev server:

```
npm run dev
```

3. Open your browser:

```
http://localhost:3000
```

Common scripts (typical):

- `npm run dev` — Start Next.js in development (fast refresh, file watching).
- `npm run build` — Create an optimized production build.
- `npm run start` — Start the production server after a build.

If your `package.json` uses different script names, run the appropriate ones (e.g., `pnpm dev` or `yarn dev`).

## Working with the API

The project includes an API route under `app/api/generate/route.ts`. That file is a good place for small server-side endpoints used by the app or external clients.

When developing: send requests to:

```
http://localhost:3000/api/generate
```

Adjust paths if you add additional API routes or rename directories.

## Development tips & best practices

- Keep UI and server logic separated: use `app/` components for rendering and `app/api/` for server-only code.
- Avoid large server-side computations in API routes — prefer background jobs or serverless function timeouts.
- Add environment variables in a `.env.local` file for secrets; never commit secrets to git.

## Edge cases to watch

- Empty or malformed API payloads: validate inputs and return descriptive errors (HTTP 4xx).
- Large asset sizes: optimize images placed in `public/` to reduce page load times.
- Type mismatches: keep `tsconfig.json` settings strict for earlier detection.

## Tests

This scaffold doesn't include automated tests by default. Recommended next steps:

- Add a small test runner (Jest or Vitest) and create one integration test for the main route and one unit test for any business logic in `app/api/generate/route.ts`.

## Linting & formatting

If ESLint and Prettier are present in `package.json`, run them before committing. If not present, consider adding them to keep code consistent.

## Deployment

Deploy to Vercel for the easiest experience (native Next.js support). Steps:

1. Connect this repository to Vercel.
2. Use the default build settings (Next.js).
3. Set any environment variables in the Vercel dashboard.

Alternatively, you can build and run on any Node-compatible host by running `npm run build` and `npm run start`.

## Troubleshooting

- If `npm run dev` fails: confirm Node version (`node -v`) and reinstall dependencies (`rm -rf node_modules package-lock.json && npm install`). On Windows PowerShell, use `Remove-Item -Recurse node_modules`.
- Port conflict: stop the process using port 3000, or run the app on a different port with `PORT=3001 npm run dev` (Windows PowerShell: `$env:PORT=3001; npm run dev`).

## Contributing

- Keep changes small and focused.
- Open issues for bugs or feature requests.
- Add tests for any non-trivial logic.

## License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

## Contact / Next steps

- Want help adding tests, CI, or a deploy pipeline? I can add a minimal Jest/Vitest setup, GitHub Actions CI, or a Vercel deployment configuration.

---

Happy hacking — make something neat!
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
