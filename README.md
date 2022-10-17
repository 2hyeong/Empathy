# Empathy

A platform to emphathize with the personality of the people around you.

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `storybook`: a storybook of empahty
- `web`: empathy web
- `ui`: a stub React component library shared by `web` and it's wrapped based on [MUI](https://mui.com/) components
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Tech Stacks

- [`nextjs`](https://nextjs.org/)
- [`swr`](https://swr.vercel.app/ko)
- [`recoil`](https://recoiljs.org/ko/)
- [`vitest`](https://vitest.dev/)

- [`openapi gen`](https://github.com/OpenAPITools/openapi-generator)

- [`turborepo`](https://turborepo.org/)
- [`pnpm`](https://pnpm.io/ko/)
- [`vercel`](https://vercel.com/)
- [`bitly`](https://bitly.com/pages/home/v2)

- `firebase auth`
- `firestore`
- `firebase storage`
- `firebase functions`
- `firebase analytics`
- `firebase hosting`
- [`fireorm`](https://fireorm.js.org/#/)

- [`amplitude`](https://amplitude.com/)
- `gtm`
- `facebook pixel`
- `doppler`
- `google optimize`

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
