const express = require('express');
const {apiLayersList} = require('../controllers/layers');

const router = express.Router();

router.get('/', apiLayersList);

module.exports = router;
