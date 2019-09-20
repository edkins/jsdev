const {listDirs} = require('../storage/files');

const layersList = () => listDirs('server-src');

module.exports = {layersList};
