const simpleHtmlIndex = require('simple-html-index');

const defaultIndex = (staticUrl) => function(req,res) {
	simpleHtmlIndex({entry:staticUrl}).pipe(res);
}

module.exports = defaultIndex;
