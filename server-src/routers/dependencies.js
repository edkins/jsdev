const express = require('express');
const {createNpmDependency,listNpmDependencies} = require('../storage/npm');
const verifyRegex = require('../validation/verify-regex');

const router = express.Router();

const re = /^[a-z][a-z-]*[a-z]$/;

router.get('/', listNpmDependencies);
router.put('/:id/', verifyRegex({id:re}), createNpmDependency);

module.exports = router;
