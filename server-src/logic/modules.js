const {listDirs,listJs,getJs} = require('../storage/files');

async function modulesList() {
	const result = [];
	for (const dir of await listDirs('server-src')) {
		for (const filename of await listJs(`server-src/${dir}`)) {
			result.push({
				id: `${dir}--${filename}`,
				layer: dir,
				type: filename
			});
		}
	}
	return result;
}

async function modulesGet(id) {
	const m = id.match(/^([a-z-]+?)--([a-z-]+)$/);
	const layer = m[1];
	const type = m[2];
	return getJs(`server-src/${layer}`, type);
}

module.exports = {modulesList,modulesGet};
