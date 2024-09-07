# Ecommerce Application
Comprehensive e-commerce platform with an admin dashboard

- Ingredients: NextJS, ExpressJS, TS, Zod, MongoDB, React Query, Shadcn, Cloudinary

## Features/Outcomes
- Optimized application speed and user interactions through effective caching with React Query and state management with Zustand.
- Ensured high data accuracy and security with Zod for data validation and secure authentication mechanisms using access and refresh tokens.
- Implemented Stripe-based payment management for a fully functional and scalable online store.
- Leveraged Winston for comprehensive logging, improving error tracking and system reliability. TypeScript across both frontend and backend to ensure type safety and maintainability.

### Install dependencies 
```shell
npm i
```

```shell
pnpm i
```
```shell
yarm i
```

### Getting Started
Run the development server:
```shell
npm run dev
```

### Provide environment variables

Example of environment variables is provided in `.env.example`

```env
NEXT_PUBLIC_BASE_URL='http://localhost:8080/api/v1'
NEXT_PUBLIC_STRIPE_PUBIC='pk_test_123'
NEXT_PUBLIC_STRIPE_SECRET='sk_test_123'
```
