export default async function discordStatsHandler(req, res) {
    const urlToFetch = `https://discord.com/api/guilds/${process.env.GUILD_ID}?with_counts=true`
    console.log('Fetching ', process.env.GUILD_ID, process.env.BOT_TOKEN)
    try {
        const response = await fetch(urlToFetch, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bot ${process.env.BOT_TOKEN}`
        }
        });

        const discordStats = await response.json();
        res.status(200).json({memberCount: discordStats.approximate_member_count});
    } catch(err) {
        res.status(500);
    }
}