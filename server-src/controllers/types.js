const {typesList} = require('../logic/types');

const apiTypesList = (req,res,next) => {
	typesList((err,listing) => {
		if (err) {
			next(err);
		} else {
			res.json({listing: listing.map(id => ({id}))});
		}
	});
};

module.exports = {apiTypesList};
