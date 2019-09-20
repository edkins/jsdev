const {layersList} = require('../logic/layers');

const apiLayersList = (req,res,next) => {
	layersList().then(
		listing => res.json({listing: listing.map(id => ({id}))}),
		err => next(err)
	);
};

module.exports = {apiLayersList};

