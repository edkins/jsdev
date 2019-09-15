let connect = require('connect');
let http = require('http');

let defaultIndex = require('simple-html-index');

let browserify = require('browserify');
let watchifyMiddleware = require('watchify-middleware');
let staticUrl = 'bundle.js';
let bundler = browserify('app.js', {
	cache: {},
	packageCache: {},
	basedir: 'client-src'
});
let watchify = watchifyMiddleware(bundler);

let app = connect();

app.use('/index.html', function(req,res) {
	defaultIndex({entry:staticUrl}).pipe(res);
});
app.use('/'+staticUrl, watchify);
app.use('/api/', function(req,res) {
	res.end('Hello from Connect2!\n');
});

http.createServer(app).listen(3000);

