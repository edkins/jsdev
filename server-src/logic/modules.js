const {listDirs,listJs,getJs,putJs} = require('../storage/files');

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

const parse_id = (id) => {
	const m = id.match(/^([a-z-]+?)--([a-z-]+)$/);
	const layer = m[1];
	const type = m[2];
	return {layer,type};
};

async function modulesGet(id) {
	const {layer,type} = parse_id(id);
	return await getJs(`server-src/${layer}`, type);
}

async function modulesPut(id,data) {
	const {layer,type} = parse_id(id);
	await putJs(`server-src/${layer}`, type, data);
}

module.exports = {modulesList,modulesGet,modulesPut};
