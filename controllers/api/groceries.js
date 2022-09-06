const Grocery = require('../../models/grocery');

module.exports = {
    index,
    create,
}

async function index(req, res) {
    const groceries = await Grocery.find({});
    res.json(groceries);
}

async function create (req, res) {
    const item = await Grocery.create(req.body);
    console.log(item)
    item.user = req.user._id
    res.json(item)

}