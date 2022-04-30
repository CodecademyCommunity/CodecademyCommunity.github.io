const cron = require('node-cron');
const { fetchGuildData } = require('../helpers/fetchGuildData');

/**
 * Start cron job to fetch guild data every minute
 */

module.exports = async (io) => {

  let counter = 0;

  cron.schedule('* * * * *', async () => {
    try {
      counter++;
      const memberCount = await fetchGuildData() + counter;
      io.sockets.emit('discord data', { memberCount: memberCount + 60000 });
    } catch (err) {
      console.error(err);
    }
  });
};