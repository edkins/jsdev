const {listDirs,listJs,getJs,putJs,deleteJs,fileExists} = require('../storage/files');
const {getFileKindAndDeps} = require('../details/modules');
const path = require('path');

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

async function typesList() {
    const seen = {};
    const result = [];
    for (const {type} of await modulesList()) {
        if (!(type in seen)) {
             seen[type] = true;
             result.push({id:type});
        }
    }
    return result;
}

async function layersList() {
    const seen = {};
    const result = [];
    for (const {layer} of await modulesList()) {
        if (!(layer in seen)) {
             seen[layer] = true;
             result.push({id:layer});
        }
    }
    return result;
}

async function modulesList() {
    const result = [];
    const buffer = [{id:'package.json',layer:0}];
    const seen = {};
    
    while (buffer.length > 0) {
        const {id,layer} = buffer.splice(0, 1)[0];
        if (!(id in seen)) {
            seen[id] = true;
            const dotext = path.extname(id);
            const type = path.basename(id, dotext);
            result.push({id,layer:`layer-${layer}`,type});
            const {deps} = await getFileKindAndDeps(id);
            for (const dep of deps) {
                buffer.push({id:dep, layer:layer+1});
            }
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

module.exports = {modulesList,modulesGet,modulesPut,modulesDelete,typesList,layersList};
