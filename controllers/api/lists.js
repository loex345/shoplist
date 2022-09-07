const List = require('../../models/list')

module.exports = {
    index,
    createNewList,
}

async function index (req, res) {
    const lists = await List.find({});
    res.json(lists);
}

async function createNewList (req, res) {
    console.log(req.body)
    const list = await List.create(req.body);
    list.user = req.user._id
    res.json(list)
}