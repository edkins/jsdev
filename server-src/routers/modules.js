const express = require('express');
const {apiModulesList,apiModulesGet,apiModulesPut} = require('../controllers/modules');
const verifyRegex = require('../validation/verify-regex');

const router = express.Router();

const re = /^[a-zA-Z][a-zA-Z-]*[a-zA-Z]--[a-zA-Z][a-zA-Z-]*[a-zA-Z]$/;
const ft = /^(js|jsx)$/;

router.get('/', apiModulesList);
router.get('/:id', verifyRegex({id:re}), apiModulesGet);
router.put('/:id', express.json(), verifyRegex({id:re},{fileType:ft}), apiModulesPut);

module.exports = router;
