const {listDirs,listTypedJs,fileExists,getJs,putJs,deleteJs} = require('../storage/files');
const path = require('path');

async function listRecursive(dir, result) {
    const subdirs = await listDirs(dir);

    result.push({id:dir,dir:true});

    for (const subdir of subdirs) {
        await listRecursive(`${dir}/${subdir}`, result);
    }

    const files = await listTypedJs(dir);
    for (const {fileName,fileType} of files) {
        result.push({id:`${dir}/${fileName}.${fileType}`,dir:false});
    }
}

async function filesList() {
    const result = [];

    const dirs = await listDirs('.');
    for (const dir of dirs) {
        if (dir !== 'node_modules' && dir !== '.git') {
            await listRecursive(dir, result);
        }
    }
    return result;
}

async function filesGet(id) {
    const dotext = path.extname(id);
    const dir = path.dirname(id);
    const fileName = path.basename(id,dotext);
    const ext = dotext.substring(1);
    if (await fileExists(dir, fileName, ext)) {
        const data = await getJs(dir, fileName, ext);
        return {data, fileType:ext};
    } else {
        throw new Error('File not found');
    }
}

async function filesPut(id, data) {
    const dotext = path.extname(id);
    const dir = path.dirname(id);
    const fileName = path.basename(id,dotext);
    const ext = dotext.substring(1);
    putJs(dir, fileName, data, ext);
}

async function filesDelete(id) {
    const dotext = path.extname(id);
    const dir = path.dirname(id);
    const fileName = path.basename(id,dotext);
    const ext = dotext.substring(1);
    deleteJs(dir, fileName, ext);
}

module.exports = {filesList,filesGet,filesPut,filesDelete};
