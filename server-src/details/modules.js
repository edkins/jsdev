const {getFile} = require('../storage/files');
const {Parser} = require('acorn');
const AcornJsx = require('acorn-jsx');

const JsxParser = Parser.extend(
    AcornJsx(),
);

function processPackageJson(text) {
    const obj = JSON.parse(text);
    const deps = [];

    if ('main' in obj && obj.main !== undefined) {
        deps.push(`${obj.main}`);
    }

    return {
        fileType: 'json',
        deps
    };
}

async function getFileKindAndDeps(id) {
    const text = await getFile(id);

    if (id === 'package.json') {
        return processPackageJson(text);
    }

    let program = undefined;
    let fileType = undefined;
    if (id.endsWith('.jsx')) {
        program = JsxParser.parse(text);
        fileType = 'jsx';
    } else {
        program = Parser.parse(text);
        fileType = 'js';
    }

    return {fileType,deps:[]};
}

module.exports = {getFileKindAndDeps};
