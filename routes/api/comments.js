const express = require('express');
const router = express.Router();
commentsCtrl = require('../../controllers/api/comments')

router.post('/:id/new', commentsCtrl.createComment)



module.exports = router;