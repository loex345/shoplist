const List = require('../../models/list')

module.exports = {
    index,
    createNewList,
    show,
}

async function index (req, res) {
    const lists = await List.find({});
    res.json(lists);
}

async function createNewList (req, res) {
    console.log(req.body)
    const list = await List.create(req.body);
    list.user = req.user._id
    list.save();
    res.json(list)
}

async function show (req, res) {
    const list =  await List.findById(req.params.id, function(err, list) {
        res.json(list)
    })
}