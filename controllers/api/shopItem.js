const ShopItem = require('../../models/shopItem');

module.exports = {
    index,
    createItem,
    deleteItem,
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
async function deleteItem (req, res){
    await ShopItem.findOneAndDelete({_id: req.params.id, user: req.user._id})
    const item = await ShopItem.find({}).populate('user').exec();
    res.json(item)
}
//Function to delete delete item