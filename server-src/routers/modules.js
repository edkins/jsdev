const express = require('express');
const {apiModulesList} = require('../controllers/modules');

const router = express.Router();

router.get('/', apiModulesList);

module.exports = router;
