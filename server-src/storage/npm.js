let childProcess = require('child_process');

const createNpmDependency = (req,res,next) => {
	const id = req.params.id;
	childProcess.exec(`npm install ${id}`, (error,stdout,stderr) => {
		if (error) {
			next(error);
		} else {
			res.sendStatus(201);
		}
	});
}

const listNpmDependencies = (req,res,next) => {
	childProcess.exec('npm list --json --depth=0', (error,stdout,stderr) => {
		if (error) {
			next(error);
		} else {
			const listing = [];
			const deps = JSON.parse(stdout).dependencies;
			for (const id in deps) {
				const version = deps[id].version;
				listing.push({id,version});
			}
			res.json({listing});
		}
	});
};

module.exports = {createNpmDependency, listNpmDependencies};

