const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/api/comments')

router.post('/:id/comments', commentsCtrl.commentCreate)



module.exports = router;