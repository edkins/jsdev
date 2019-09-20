const express = require('express');
const {apiTypesList} = require('../controllers/types');

const router = express.Router();

router.get('/', apiTypesList);

module.exports = router;

