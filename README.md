# Mobilization Calculator — Vite + React + Tailwind (EN)

Ready for **GitHub Pages**. Theme powered by TailwindCSS.

## Run locally
```bash
npm i
npm run dev
```

## GitHub Pages (project Pages)
If your site is `https://USER.github.io/REPO/`, set Vite's base in `vite.config.ts`:
```ts
export default defineConfig({
  plugins: [react()],
  base: '/REPO/', // set your repo here
})
```
Or set `VITE_BASE=/REPO/` as an env var in your Pages workflow.

## Build locally
```bash
npm run build
npm run preview
```