This is a Next.js port of the Codecademy Community Website.

## Getting Started

1. First, after cloning the project, change directory into /next where to port is. Then run "npm install".

2. Create a file for env-variables called .env.local in the /next directory.
In that file enter the following environmental variables with your values for the Discord API:
```
BOT_TOKEN
GUILD_ID
```

3. Then do:

```bash
npm run dev
```
This starts the development server on port 3000.

### Notes on structure
There is an added page called Discord Stats. This is a really basic display of the current server count from the Discord API. This page could be improved to provide a count-down to server member goals or a more visual presentation of server stats.

The different sections of the website are under /pages. The file _app.js adds some metadata and the sass-styles globally.
The file index.js is the "landing page". All other files under /pages will automatically become a route with the name of the file.

The biggest differences from CRA was the Link component (where Next provides their own Link) and Image component where they also provide their own with optimizations. The file /components/layout.js adds the Header and Footer to the layout for all pages. Except for those differences most code is the same as with CRA.
