This is a Next.js port of Codecademy Community to try it out.

## Getting Started

First, change directory into /next where to port is. Then run "npm install".

Create a file for env-variables called .env.local
In that file enter the following environmental variables with your values for the Discord API:
`
BOT_TOKEN
GUILD_ID
`

Then do:

```bash
npm run dev
```

### Notes on structure
The different sections of the website are under /pages. The file _app.js adds some metadata and the sass-styles globally.
The file index.js is the "homepage". All other files under /pages will automatically become a route.

The biggest differences from CRA was the Link component (where Next provides their own Link) and Image component where they also provide their own with optimizations. The file /components/layout.js adds the Header and Footer to the layout for all pages. Except for those differences most code is the same as with CRA.

Benefits over CRA:  
Provides SSG (static site generation) or SSR (if needed) as well as easy creation of api-routes. Gives better SEO (although perhaps not that important) due to not having the "blank html page". Easy to extent with backend capabilities such as API-routes or db-calls with protected credentials if this is needed in the future.

Disadvantages:
More opinionated.

#### Notes from original README.md
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

##### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!