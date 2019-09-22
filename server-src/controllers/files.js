const {filesList,filesGet,filesPut,filesDelete} = require('../logic/files');

const apiFilesList = (req,res,next) => {
	filesList().then(
		listing => res.json({listing}),
		err => next(err)
	);
};

const apiFilesGet = (req,res,next) => {
    filesGet(req.params.id).then(
        ({data,fileType}) => res.json({data,fileType}),
        err => next(err)
    );
};

const apiFilesPut = (req,res,next) => {
	filesPut(req.params.id, req.body.data).then(
		() => res.status(204),
		err => next(err)
	);
};

const apiFilesDelete = (req,res,next) => {
	filesDelete(req.params.id).then(
		() => res.status(204),
		err => next(err)
	);
};


module.exports = {apiFilesList,apiFilesGet,apiFilesPut,apiFilesDelete};
