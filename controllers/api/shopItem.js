const ShopItem = require('../../models//shopItem');

module.exports = {
    index,
    createItem,
}

async function index(req, res) {
    const groceries = await ShopItem.find({});
    res.json(groceries);
}

async function createItem (req, res) {
    console.log(req.body)
    const item = await ShopItem.create(req.body);
    item.user = req.user._id
    res.json(item)

}