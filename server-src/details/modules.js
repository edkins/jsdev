const {getFile,fileExists} = require('../storage/files');
const {Parser} = require('acorn');
const AcornJsx = require('acorn-jsx');
const walk = require('acorn-walk');
const path = require('path');

const JsxParser = Parser.extend(
    AcornJsx(),
);

function processPackageJson(text) {
    const obj = JSON.parse(text);
    const deps = [];

    if (typeof obj.main === 'string') {
        deps.push({id:obj.main,hint:'entry'});
    }

    return {
        fileType: 'json',
        deps
    };
}

async function translateRequire(value,id) {
    if (!value.startsWith('.')) {
        return undefined;
    }
    
    const dir = path.dirname(id);
    const candidate = path.join(dir, value);
    if (candidate.startsWith('.')) {    // don't want ../ things
       return undefined;
    }

    console.log(candidate);
    const js = `${candidate}.js`;
    const jsx = `${candidate}.jsx`;
    if (await fileExists(js)) {
        return js;
    }
    if (await fileExists(jsx)) {
        return jsx;
    }
    return undefined;
}

async function getRequires(program,id) {
    const values = [];
    walk.simple(program, {
       CallExpression(node) {
            if (node.callee.type === 'Identifier'
                    && node.callee.name === 'require'
                    && node.arguments.length === 1
                    && node.arguments[0].type === 'Literal'
                    && typeof(node.arguments[0].value) === 'string') {
                values.push(node.arguments[0].value);
            }
        }
    });

    const result = [];
    for (const value of values) {
        const depid = await translateRequire(value,id);
        if (depid !== undefined) {
            result.push({id:depid,hint:'required'});
        }
    }

    return result;
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

    const deps = [];
    deps.push(...await getRequires(program,id));

    return {fileType,deps};
}

module.exports = {getFileKindAndDeps};
