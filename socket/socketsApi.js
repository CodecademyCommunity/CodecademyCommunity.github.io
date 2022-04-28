const axios = require('axios');
const cron = require('node-cron');
const socket_io = require('socket.io');
const io = socket_io();
const socketApi = {};

socketApi.io = io;

const urlToFetch = `https://discord.com/api/guilds/${process.env.GUILD_ID}?with_counts=true`;

io.on('connection', async function(socket){
    try {
        const response = await axios.get(urlToFetch, {
          headers: {
            'Authorization': `Bot ${process.env.BOT_TOKEN}`
          }})
        socketApi.sendNotification(response.data.approximate_member_count);
      } catch (err) {
        console.error(err);
      }
});

/**
 * Start cron job to fetch guild data every minute
 */
 console.log('Starting cron job');
 cron.schedule('* * * * *', async () => {
  try {
    const response = await axios.get(urlToFetch, {
      headers: {
        'Authorization': `Bot ${process.env.BOT_TOKEN}`
      }})
    socketApi.sendNotification(response.data.approximate_member_count);
  } catch (err) {
    console.error(err);
  }
});

socketApi.sendNotification = function(count) {
    io.sockets.emit('discord data', {memberCount: count});
}

module.exports = socketApi;