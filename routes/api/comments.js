const express = require('express');
const router = express.Router();
commentsCtrl = require('../../controllers/api/comments')

router.post('/new', commentsCtrl.createComment)



module.exports = router;