const List = require('../../models/list')

module.exports = {
    commentCreate,
    deleteComment
}

async function commentCreate (req, res) {
    List.findById(req.params.id, function (err, list) {
        req.body.user = req.user._id;
        list.comments.push(req.body)
        list.save();
    })
    const comments = await List.find({}).populate('user').exec();
    console.log(comments)
    res.json(comments)
}

async function deleteComment (req, res) {
    await List.findOneAndDelete({_id: req.params.id, user: req.user._id})
    const lists = await List.find({}).populate('items').populate('user').exec();
    res.json(lists);
    }