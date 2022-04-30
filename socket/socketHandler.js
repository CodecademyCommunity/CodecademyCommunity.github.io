const { fetchGuildData } = require('../helpers/fetchGuildData');

module.exports = async (socket) => {
  try {
    const memberCount = await fetchGuildData();
    socket.emit('discord data', { memberCount: memberCount + 60000});
  } catch (err) {
    console.error(err);
  }
};
