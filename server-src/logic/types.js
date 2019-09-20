const {listDirs} = require('../storage/files');

const typesList = (cb) => {
	listDirs('server-src')((err,dirs) => {
		if (err) {
			cb(err);
		} else {
			cb(undefined,['dummy']);
		}
	});
};

module.exports = {typesList};

