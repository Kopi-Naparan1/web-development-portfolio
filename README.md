# Kopi Anan Naparan Portfolio

A personal portfolio website built with Next.js. The project is set up to showcase web development work, skills, services, testimonials, and individual project case studies.

## Tech Stack

- [Next.js](https://nextjs.org/) 16
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) 4
- ESLint 9

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev
```

Runs the app in development mode.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the production server after building.

```bash
npm run lint
```

Runs ESLint.

## Project Structure

```text
src/
  app/
    layout.js
    page.jsx
    case-study/[slug]/page.jsx
    globals.css
  components/
    case-study/
    home/
    layout/
    ui/
  data/
    project.js
public/
```

## Content

Portfolio project entries live in `src/data/project.js`. Each project includes a `slug`, `title`, and `description` that can be used by the project listing and case-study pages.

Home page sections are organized under `src/components/home/`, with shared interface pieces in `src/components/ui/`.

## Development Notes

This project is still in progress. Several home page section files are scaffolded and ready for implementation, and the case-study route is prepared for project-specific pages.

## Deployment

The app can be deployed anywhere that supports Next.js. For Vercel, connect the repository and use the default Next.js build settings:

- Build command: `npm run build`
- Output: managed by Next.js
