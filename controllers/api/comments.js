const List = require('../../models/list')

module.exports = {
    createComment,
}

async function createComment (req, res) {
    await List.findOneAndUpdate({_id: req.params.id, user: req.user._id }, 
        req.body, 
        {new: true}).exec();
    const comments = await List.find({}).populate('user').exec();
    res.json(comments)
}