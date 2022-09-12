const List = require('../../models/list')

module.exports = {
    index,
    createNewList,
    delete: deleteList,
    edit
}

async function index (req, res) {
    const lists = await List.find({}).populate('items').populate('user').exec();
    res.json(lists);
}

async function createNewList (req, res) {
    console.log(req.body)
    const list = await List.create(req.body);
    list.user = req.user._id
    list.save();
    const lists = await List.find({}).populate('items').populate('user').exec();
    res.json(lists)
}

// async function show (req, res) {
//     const list =  await List.findById(req.params.id, function(err, list) {
//         res.json(list)
//     })
// }

async function deleteList (req, res) {
    await List.findOneAndDelete({_id: req.params.id, user: req.user._id})
    const lists = await List.find({}).populate('items').populate('user').exec();
    res.json(lists);
    }

async function edit (req, res) {
    try {
      await List.findOneAndUpdate({_id: req.params.id, user: req.user._id }, 
        req.body, 
        {new: true}).exec();
        const lists = await List.find({}).populate('items').populate('user').exec();
        res.json(lists)
    } catch (err) {
        res.status(400).json(err,"Something is not right here")
    }
}