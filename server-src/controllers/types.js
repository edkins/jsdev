const {typesList} = require('../logic/modules');

const apiTypesList = (req,res,next) => {
	typesList().then(
		listing => res.json({listing}),
		err => next(err)
	);
};

module.exports = {apiTypesList};
