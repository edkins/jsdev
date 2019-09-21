const {modulesList,modulesGet,modulesPut,modulesDelete} = require('../logic/modules');

const apiModulesList = (req,res,next) => {
	modulesList().then(
		listing => res.json({listing}),
		err => next(err)
	);
};

const apiModulesGet = (req,res,next) => {
	modulesGet(req.params.id).then(
		({data,fileType}) => res.json({data,fileType}),
		err => next(err)
	);
};

const apiModulesPut = (req,res,next) => {
	modulesPut(req.params.id, req.body.data, req.body.fileType).then(
		() => res.status(204),
		err => next(err)
	);
};

const apiModulesDelete = (req,res,next) => {
	modulesDelete(req.params.id).then(
		() => res.status(204),
		err => next(err)
	);
};

module.exports = {apiModulesList,apiModulesGet,apiModulesPut,apiModulesDelete};
