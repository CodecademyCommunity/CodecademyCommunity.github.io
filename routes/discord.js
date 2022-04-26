const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async function(req, res, next) {
  const urlToFetch = `https://discord.com/api/guilds/${process.env.GUILD_ID}?with_counts=true`

  try {
    const response = await axios.get(urlToFetch, {
      headers: {
        'Authorization': `Bot ${process.env.BOT_TOKEN}`
      }})
    return res.json({memberCount: response.data.approximate_member_count});
  } catch (err) {
    next(err);
  }
});

module.exports = router;