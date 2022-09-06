const mongoose = require('mongoose');
require('./category');

const shopItemSchema = require('./grocerySchema');

module.exports = mongoose.model('shopItem', shopItemSchema);