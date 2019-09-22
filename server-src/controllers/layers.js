const {layersList} = require('../logic/modules');

const apiLayersList = (req,res,next) => {
	layersList().then(
		listing => res.json({listing}),
		err => next(err)
	);
};

module.exports = {apiLayersList};

