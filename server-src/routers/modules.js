const express = require('express');
const {apiModulesList,apiModulesGet} = require('../controllers/modules');
const verifyRegex = require('../validation/verify-regex');

const router = express.Router();

const re = /^[a-z][a-z-]*[a-z]--[a-z][a-z-]*[a-z]$/;

router.get('/', apiModulesList);
router.get('/:id', verifyRegex({id:re}), apiModulesGet);

module.exports = router;
