const {layersList} = require('../logic/layers');

const apiLayersList = (req,res,next) => {
	layersList((err,listing) => {
		if (err) {
			next(err);
		} else {
			res.json({listing: listing.map(id => ({id}))});
		}
	});
};

module.exports = {apiLayersList};

