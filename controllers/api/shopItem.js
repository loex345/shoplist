const ShopItem = require('../../models/shopItem');

module.exports = {
    index,
    createItem,
}

async function index(req, res) {
    const shopItems = await ShopItem.find({});
    res.json(shopItems);
}

async function createItem (req, res) {
    console.log(req.body)
    const item = await ShopItem.create(req.body);
    res.json(item)

}