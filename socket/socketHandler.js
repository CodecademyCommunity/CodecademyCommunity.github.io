const { fetchGuildData } = require('../helpers/fetchGuildData');

module.exports = async (socket) => {
  try {
    const memberCount = await fetchGuildData();
    socket.emit('discord data', { memberCount });
  } catch (err) {
    console.error(err);
  }
};
