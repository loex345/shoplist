const Grocery = require('../../models/grocery');

module.exports = {
    index,
}

async function index(req, res) {
    const groceries = await Grocery.find({});
    console.log(groceries);
    res.json(groceries);
}