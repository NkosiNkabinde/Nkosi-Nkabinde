# Personal Portfolio

This is a personal portfolio project built with Vite, React, and TypeScript using pnpm.

## Featured Projects

- SAPS Crime Score (SentryPipe)
  - End-to-end Azure/Python pipeline combining 10+ years of SAPS crime data with media sentiment to produce a balanced Safety Score (70% crime, 30% fear index). Visualized via national heatmap and suburb drill-down.
  - Tech: Azure Functions, Azure Blob/Data Lake, Python (Pandas, Great Expectations), spaCy, VADER/TextBlob, Power BI/Streamlit
  - Links: [GitHub](https://github.com/youruser/sentrypipe) · [Demo](https://demo.example.com/sentrypipe)

- WanderLearn LMS
  - Modern LMS built with Next.js 14, TypeScript, and Prisma. Features RBAC, course creation, rich content editing (TipTap), video, assignments, progress tracking, admin analytics, and messaging.
  - Tech: Next.js 14, TypeScript, TailwindCSS, Radix UI, TipTap, Prisma, PostgreSQL, AWS S3, Better Auth
  - Links: [GitHub](https://github.com/youruser/wanderlearn-lms) · [Demo](https://demo.example.com/wanderlearn)

## Setup

1. Install Node.js from [nodejs.org](https://nodejs.org/).
2. Enable pnpm: `corepack enable pnpm`
3. Install dependencies: `pnpm install`
4. Start the development server: `pnpm dev`

## Build

To build for production: `pnpm build`

## Preview

To preview the production build: `pnpm preview`