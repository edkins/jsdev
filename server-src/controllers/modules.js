const {modulesList} = require('../logic/modules');

const apiModulesList = (req,res,next) => {
	modulesList().then(
		listing => res.json({listing}),
		err => next(err)
	);
};

module.exports = {apiModulesList};

