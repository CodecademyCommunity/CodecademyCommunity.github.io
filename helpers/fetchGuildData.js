const axios = require('axios');

async function fetchGuildData() {
  try {
    const urlToFetch = `https://discord.com/api/guilds/${process.env.GUILD_ID}?with_counts=true`;
    const response = await axios.get(urlToFetch, {
      headers: {
        Authorization: `Bot ${process.env.BOT_TOKEN}`,
      },
    });
    return response.data.approximate_member_count;
  } catch (err) {
    console.error(err);
  }
}

module.exports = { fetchGuildData };
