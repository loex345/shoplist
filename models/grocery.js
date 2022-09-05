const mongoose = require('mongoose');
require('./category');

const grocerySchema = require('./grocerySchema');

module.exports = mongoose.model('Grocery', grocerySchema);