const express = require('express');
const watchify = require('../dev/watchify');
const defaultIndex = require('../hypertext/default-index');
const redirectToPage = require('../hypertext/redirect-to-page');
const apiLayers = require('./layers');
const apiTypes = require('./types');
const apiDependencies = require('./dependencies');
const apiModules = require('./modules');
const apiFiles = require('./files');


const router = express.Router();

router.get('/', redirectToPage('/index.html'));
router.get('/index.html', defaultIndex('/bundle.js'));
router.get('/bundle.js', watchify);
router.use('/api/layers', apiLayers);
router.use('/api/types', apiTypes);
router.use('/api/modules', apiModules);
router.use('/api/files', apiFiles);

module.exports = router;
