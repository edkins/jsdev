const {modulesList,modulesGet} = require('../logic/modules');

const apiModulesList = (req,res,next) => {
	modulesList().then(
		listing => res.json({listing}),
		err => next(err)
	);
};

const apiModulesGet = (req,res,next) => {
	modulesGet(req.params.id).then(
		data => res.json({data}),
		err => next(err)
	);
};

module.exports = {apiModulesList,apiModulesGet};

