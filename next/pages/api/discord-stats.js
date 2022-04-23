export default async function discordStatsHandler(req, res) {
    const urlToFetch = `https://discord.com/api/guilds/${process.env.GUILD_ID}?with_counts=true`
    console.log('Fetching ', process.env.GUILD_ID, process.env.BOT_TOKEN)
    try {
        const serverData = await fetch(urlToFetch, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bot ${process.env.BOT_TOKEN}`
        }
        });

        const json = await serverData.json();
        res.status(200).json(json);
    } catch(err) {
        res.status(500);
    }
}