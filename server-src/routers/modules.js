const express = require('express');
const {apiModulesList,apiModulesGet,apiModulesPut} = require('../controllers/modules');
const verifyRegex = require('../validation/verify-regex');

const router = express.Router();

const re = /^[a-zA-Z][a-zA-Z-]*[a-zA-Z]--[a-zA-Z][a-zA-Z-]*[a-zA-Z]$/;

router.get('/', apiModulesList);
router.get('/:id', verifyRegex({id:re}), apiModulesGet);
router.put('/:id', verifyRegex({id:re}), express.json(), apiModulesPut);

module.exports = router;
