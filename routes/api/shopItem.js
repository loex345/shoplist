const express = require('express');
const router = express.Router();
const shopItemCtrl = require('../../controllers/api/shopItem');

router.get('/', shopItemCtrl.index);
router.post('/newItem', shopItemCtrl.createItem);

module.exports = router;