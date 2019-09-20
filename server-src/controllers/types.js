const {typesList} = require('../logic/types');

const apiTypesList = (req,res,next) => {
	typesList().then(
		listing => res.json({listing: listing.map(id => ({id}))}),
		err => next(err)
	);
};

module.exports = {apiTypesList};
