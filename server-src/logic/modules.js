const {listDirs,listJs,getJs,putJs,fileExists} = require('../storage/files');

async function findLayer(layer) {
	for (const dir of await listDirs('server-src')) {
		if (dir === layer) {
                    return `server-src/${layer}`;
                }
	}
	for (const dir of await listDirs('client-src')) {
		if (dir === layer) {
                    return `client-src/${layer}`;
                }
	}
        throw new Error('Could not find layer');
}

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
	for (const dir of await listDirs('client-src')) {
		for (const filename of await listJs(`client-src/${dir}`)) {
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
	const m = id.match(/^([a-zA-Z-]+?)--([a-zA-Z-]+)$/);
	const layer = m[1];
	const type = m[2];
	return {layer,type};
};

async function modulesGet(id) {
	const {layer,type} = parse_id(id);
        const dir = await findLayer(layer);
        if (await fileExists(dir, type, 'js')) {
   	    return await getJs(dir, type, 'js');
        } else if (await fileExists(dir, type, 'jsx')) {
            return await getJs(dir, type, 'jsx');
        } else {
	    throw new Error('File not found');
	}
}

async function modulesPut(id,data) {
	const {layer,type} = parse_id(id);
        const dir = await findLayer(layer);
        if (await fileExists(dir, type, 'jsx')) {
            await putJs(dir, type, data, 'jsx');
        } else {
            await putJs(dir, type, data, 'js');
        }
}

module.exports = {modulesList,modulesGet,modulesPut};
