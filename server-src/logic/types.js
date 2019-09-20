const {listDirs,listJs} = require('../storage/files');

async function typesList() {
	const map = {};
	for (const dir of await listDirs('server-src')) {
		for (const filename of await listJs(`server-src/${dir}`)) {
			map[filename] = true;
		}
	}
	const filenames = Object.keys(map);
	filenames.sort();
	return filenames;
}

module.exports = {typesList};

