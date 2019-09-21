const browserify = require('browserify');
const watchifyMiddleware = require('watchify-middleware');
const bundler = browserify('client-src/app.jsx', {
	cache: {},
	packageCache: {},
	extensions: ['.jsx']
})
	.transform('babelify', {presets: ['@babel/env','@babel/preset-react']})
	.transform('browserify-css', {minify:true, autoInject:true});
const watchify = watchifyMiddleware(bundler, {errorHandler:true});

module.exports = watchify;