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

const listJs = (dir) => new Promise((resolve,reject) => {
	fs.readdir(dir, (err,files) => {
		if (err) {
			reject(err);
		} else {
			const listing = files.filter(f => f.endsWith('.js')).map(f => path.basename(f,'.js'));
			listing.sort();
			resolve(listing);
		}
	});
});

module.exports = {listDirs,listJs};

