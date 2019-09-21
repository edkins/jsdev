const {listDirs,listJs} = require('../storage/files');

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
	return result;
}

module.exports = {modulesList};

