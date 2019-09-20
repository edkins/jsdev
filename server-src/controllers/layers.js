const {listDirs} = require('../storage/files');

const apiLayersList = (dir) => (req,res,next) => {
	listDirs(dir)((err,listing) => {
		if (err) {
			next(err);
		} else {
			res.json({listing: listing.map(id => ({id}))});
		}
	});
};

module.exports = {apiLayersList};

