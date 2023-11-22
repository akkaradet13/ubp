# UBP Web App

Web application for **UBP**.

## Tech Stack

**_Package manager: [pnpm](https://pnpm.io/)_**

### Tools:

- [Next.js](https://nextjs.org/) (React) - Fullstack framework for React and Node.js (SSR) applications. Create frontend and backend with one.
- Firebase Fire store - NoSQL database.
- Firebase function - Serverless backend. (Wait for discussion)
- Firebase hosting - Hosting for frontend and backend. (Wait for discussion)
  > Firebase document [here](https://firebase.google.com/docs/web/setup?authuser=0)

### Frontend (Packages):

- [NextAuth.js](https://next-auth.js.org/) - Authentication.
- [NextUI](https://nextui.org/) - UI library for Next.js.
- [TailwindCSS](https://tailwindcss.com/) - CSS framework.
- [React Hook Form](https://react-hook-form.com/) - Form validation.
- [SWR](https://swr.vercel.app/) - Data fetching. **OR** [SWR](https://swr.vercel.app/)
- Data fetching.

> **Note**
> React Query and SWR are both great libraries for data fetching. But React Query is more powerful and has more features. So, I think we should use fetch to get data from API for simple case.

- [Zustand](https://zustand-demo.pmnd.rs/) - State management.
- [Framer Motion](https://www.framer.com/motion/) - Animation.

### Font and Icon:

- Google front - [Sarabun](https://fonts.google.com/specimen/Sarabun?preview.text=%E0%B8%81%E0%B8%B2%E0%B8%81%E0%B8%AA%E0%B9%88%E0%B8%B2&subset=thai&noto.script=Thai)

#### Initial Project and Install Packages

**Create Project**

```bash
npx create-next-app@latest --ts --use-pnpm ubp.webapp
```

**Install tailwind css**

```bash
pnpm add tailwindcss@latest postcss@latest autoprefixer@latest
```

**Install NextUI**

```bash
pnpm add @nextui-org/react @nextui-org/styles
```

**Install React Hook Form**

```bash
pnpm add react-hook-form@latest
```

**Install React Query**

```bash
pnpm add react-query@latest
```

**Install Zustand**

```bash
pnpm add zustand@latest
```
