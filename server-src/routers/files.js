const express = require('express');
const {apiFilesList,apiFilesGet,apiFilesPut,apiFilesDelete} = require('../controllers/files');
const verifyRegex = require('../validation/verify-regex');

const re = /^[a-z/-]+\/[a-z-]+\.[a-z]+$/;

const router = express.Router();

router.get('/', apiFilesList);
router.get('/:id([a-z/.-]+)', verifyRegex({id:re}), apiFilesGet);
router.put('/:id([a-z/.-]+)', express.json(), verifyRegex({id:re}), apiFilesPut);
router.delete('/:id([a-z/.-]+)', verifyRegex({id:re}), apiFilesDelete);

module.exports = router;
