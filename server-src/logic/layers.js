const {listDirs} = require('../storage/files');

async function layersList() {
    const result = [];
    result.push(...await listDirs('server-src'));
    result.push(...await listDirs('client-src'));
    return result;
};

module.exports = {layersList};
