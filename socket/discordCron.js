const cron = require('node-cron');
const { fetchGuildData } = require('../helpers/fetchGuildData');

/**
 * Start cron job to fetch guild data every minute
 */

module.exports = async (io) => {
  cron.schedule('* * * * *', async () => {
    try {
      const memberCount = await fetchGuildData();
      io.sockets.emit('discord data', { memberCount });
    } catch (err) {
      console.error(err);
    }
  });
};
