const {listDirs,listJs,getJs,putJs,deleteJs,fileExists} = require('../storage/files');

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
   	    const data = await getJs(dir, type, 'js');
            return {data, fileType:'js'};
        } else if (await fileExists(dir, type, 'jsx')) {
            const data = await getJs(dir, type, 'jsx');
            return {data, fileType:'jsx'};
        } else {
	    throw new Error('File not found');
	}
}

async function modulesPut(id,data,fileType) {
	const {layer,type} = parse_id(id);
        const dir = await findLayer(layer);
        if (fileType === 'jsx') {
            await putJs(dir, type, data, 'jsx');
        } else if (fileType === 'js') {
            await putJs(dir, type, data, 'js');
        }
}

async function modulesDelete(id) {
	const {layer,type} = parse_id(id);
        const dir = await findLayer(layer);
        if (await fileExists(dir, type, 'jsx')) {
            await deleteJs(dir, type, 'jsx');
        }
        if (await fileExists(dir, type, 'jsx')) {
            await deleteJs(dir, type, 'js');
        }
}

module.exports = {modulesList,modulesGet,modulesPut,modulesDelete};
