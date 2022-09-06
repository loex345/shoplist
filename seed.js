require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const ShopItem = require('./models/shopItem');

(async function() {

    await Category.deleteMany({});
    const categories = await Category.create([
      {name: 'Produce', sortOrder: 10},
      {name: 'Dry Goods', sortOrder: 20},
      {name: 'Pasta', sortOrder: 30},
      {name: 'Condiment', sortOrder: 40},
      {name: 'General Merchandise', sortOrder: 50},
    ]);
    console.log(categories)

    process.exit();
  
  })();
    



