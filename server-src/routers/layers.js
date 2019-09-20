const express = require('express');
const {apiLayersList} = require('../controllers/layers');

const router = express.Router();
const dir = 'server-src/';

router.get('/', apiLayersList(dir));

module.exports = router;
