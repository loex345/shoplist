const express = require('express');
const router = express.Router();
const groceriesCtrl = require('../../controllers/api/groceries');

router.get('/', groceriesCtrl.index);
router.post('/new', groceriesCtrl.create);

module.exports = router;