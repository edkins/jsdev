const fs = require('fs');
const path = require('path');

const listDirs = (dir) => new Promise((resolve,reject) => {
	fs.readdir(dir, {withFileTypes:true}, (err,files) => {
		if (err) {
			reject(err);
		} else {
			const listing = files.filter(f => f.isDirectory()).map(f => f.name);
			listing.sort();
			resolve(listing);
		}
	});
});

const basename = (f) => {
    if (f.endsWith('.js')) {
        return path.basename(f,'.js');
    } else if (f.endsWith('.jsx')) {
        return path.basename(f,'.jsx');
    } else {
        return undefined;
    }
}

const basenameAndType = (f) => {
    if (f.endsWith('.js')) {
        return {fileName: path.basename(f,'.js'), fileType:'js'};
    } else if (f.endsWith('.jsx')) {
        return {fileName: path.basename(f,'.jsx'), fileType:'jsx'};
    } else {
        return undefined;
    }
}

const listJs = (dir) => new Promise((resolve,reject) => {
	fs.readdir(dir, (err,files) => {
		if (err) {
			reject(err);
		} else {
			const listing = files.map(basename).filter(f => f !== undefined);
			listing.sort();
			resolve(listing);
		}
	});
});

const listTypedJs = (dir) => new Promise((resolve,reject) => {
	fs.readdir(dir, (err,files) => {
		if (err) {
			reject(err);
		} else {
			const listing = files.map(basenameAndType).filter(f => f !== undefined);
			resolve(listing);
		}
	});
});

const getFile = (path) => new Promise((resolve,reject) => {
    fs.readFile(path, {encoding:'utf8'}, (err,data) => {
        if (err) {
            reject(err);
        } else {
            resolve(data);
        }
    });
});

const fileExists = (dir,name,ext) => new Promise((resolve,reject) => {
    fs.stat(`${dir}/${name}.${ext}`, (err,stats) => {
        if (err) {
            resolve(false);
        } else {
            resolve(stats.isFile());
        }
    });
});

const getJs = (dir,name,ext) => new Promise((resolve,reject) => {
	fs.readFile(`${dir}/${name}.${ext}`, {encoding:'utf8'}, (err,data) => {
		if (err) {
			reject(err);
		} else {
			resolve(data);
		}
	});
});

const putJs = (dir,name,data,ext) => new Promise((resolve,reject) => {
	fs.writeFile(`${dir}/${name}.${ext}`, data, {encoding:'utf8'}, (err) => {
		if (err) {
			reject(err);
		} else {
			resolve(undefined);
		}
	});
});

const deleteJs = (dir,name,ext) => new Promise((resolve,reject) => {
	fs.unlink(`${dir}/${name}.${ext}`, (err) => {
		if (err) {
			reject(err);
		} else {
			resolve(undefined);
		}
	});
});

module.exports = {listDirs,listJs,listTypedJs,getJs,putJs,deleteJs,fileExists,getFile};
