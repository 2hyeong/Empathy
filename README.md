# Empathy

A platform to emphathize with the personality of the people around you.

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `storybook`: a storybook of empahty
- `storefront`: empathy storefront
- `ui`: a stub React component library shared by `storefront` and it's wrapped based on [MUI](https://mui.com/) components
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

##### Run Apps

- `doppler run -- pnpm run storybook`
- `doppler run -- pnpm run storefront`

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Firebase emulator

##### Requirements

- [firebase cli](https://firebase.google.com/docs/cli?hl=ko)
- Node.js >= 8.0
- Java JDK >= 11
  https://firebase.google.com/docs/emulator-suite/install_and_configure?hl=ko

##### Run

- pnpm run firebase:emulator

##### Port

- UI
  - http://localhost:4000
- Firestore
  - Host: localhost:3001
  - UI: http://localhost:4000/firestore

### Tech Stacks

- [`nextjs`](https://nextjs.org/)
- [`swr`](https://swr.vercel.app/ko)
- [`recoil`](https://recoiljs.org/ko/)
- [`vitest`](https://vitest.dev/)

- [`openapi gen`](https://github.com/OpenAPITools/openapi-generator)

- [`turborepo`](https://turborepo.org/)
- [`pnpm`](https://pnpm.io/ko/)
- [`vercel`](https://vercel.com/)

- `firebase extension - shorten URL using bitly`
- [`bitly`](https://bitly.com/pages/home/v2)

- `firebase auth`
- `firestore`
- `firebase storage`
- `firebase functions`
- `firebase analytics`
- `firebase performance`
- `firebase a/b test`
- [`fireorm`](https://fireorm.js.org/#/)

- `gtm`
- `facebook pixel`
- `doppler`

[firebase emulator](https://firebase.google.com/docs/rules/emulator-setup?hl=ko) must be used in local dev

```
firebase emulators:start --only firestore
firebase emulators:start --only storage
```

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
pnpm dlx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
pnpm dlx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
