const express = require('express');
const watchify = require('./dev/watchify');
const defaultIndex = require('./hypertext/default-index');
const redirectToPage = require('./hypertext/redirect-to-page');
const apiLayers = require('./routers/layers');
const apiTypes = require('./routers/types');
const apiDependencies = require('./routers/dependencies');

const app = express();

app.get('/', redirectToPage('/index.html'));
app.get('/index.html', defaultIndex('/bundle.js'));
app.get('/bundle.js', watchify);
app.use('/api/dependencies', apiDependencies);
app.use('/api/layers', apiLayers);
app.use('/api/types', apiTypes);

app.listen(3000, 'localhost');

