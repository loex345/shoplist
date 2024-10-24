const express = require('express');
const router = express.Router();
const shopItemCtrl = require('../../controllers/api/shopItem');

router.get('/', shopItemCtrl.index);
router.post('/newItem', shopItemCtrl.createItem);
router.delete('/:id', shopItemCtrl.deleteItem)
// need route for delete an item

module.exports = router;