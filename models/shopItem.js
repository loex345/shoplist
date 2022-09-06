const mongoose = require('mongoose');
require('./category');

const shopItemSchema = require('./shopItemSchema');

module.exports = mongoose.model('shopItem', shopItemSchema);