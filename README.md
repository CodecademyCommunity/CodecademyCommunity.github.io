# CodecademyCommunity.github.io

This is a React website that is served by an Express Server. The express server periodically polls member count from the Discord API and transmits the data to connected clients via websockets. It requires creating a .env file in the project root directory with the following environmental variables:
```
PORT=5000
BOT_TOKEN=discord_bot_token_here
GUILD_ID=discord_guild_id_here
```
Then run the following command in both the project root directory and in the client directory to install back-end and front-end dependencies:
```
npm i
```

To start both the express server and the React development server, type:
```
npm run dev
```
The project uses concurrently to start both the front-end and back-end at the same time.
