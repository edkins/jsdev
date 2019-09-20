const fs = require('fs');
const path = require('path');

const listDirs = (dir) => (cb) => {
	fs.readdir(dir, {withFileTypes:true}, (err,files) => {
		if (err) {
			cb(err);
		} else {
			const listing = files.filter(f => f.isDirectory()).map(f => f.name);
			listing.sort();
			cb(undefined,listing);
		}
	});
};

const listJs = (dir) => (cb) => {
	fs.readdir(dir, (err,files) => {
		if (err) {
			next(err);
		} else {
			const listing = files.filter(f => f.endsWith('.js')).map(f => path.basename(f,'.js'));
			listing.sort();
			cb(undefined,listing);
		}
	});
};

module.exports = {listDirs,listJs};

