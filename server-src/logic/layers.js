const {listDirs} = require('../storage/files');

const layersList = (cb) => {
	listDirs('server-src')(cb);
};

module.exports = {layersList};
