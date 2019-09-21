const {modulesList,modulesGet,modulesPut} = require('../logic/modules');

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

const apiModulesPut = (req,res,next) => {
	modulesPut(req.params.id, req.body.data).then(
		() => res.status(204),
		err => next(err)
	);
};

module.exports = {apiModulesList,apiModulesGet,apiModulesPut};
