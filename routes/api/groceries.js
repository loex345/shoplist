const express = require('express');
const router = express.Router();
const groceriesCtrl = require('../../controllers/api/groceries');

router.get('/', groceriesCtrl.index);

module.exports = router;