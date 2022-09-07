const express = require('express');
const router = express.Router();
const listsCtrl = require('../../controllers/api/lists');

router.get('/', listsCtrl.index);
router.post('/newList', listsCtrl.createNewList);

module.exports = router;