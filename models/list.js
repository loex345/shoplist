const Schema = require('mongoose').Schema;
const { default: mongoose } = require('mongoose');
const shopItemSchema = require('./shopItemSchema')

const commentSchema = new Schema({
    content: { type: String, default: 'none'},
    budgetamt: { type: Number, default: 0.00},
    user: { type: Schema.Types.ObjectId, ref:'User'}
    // may need some vitrual properties
})

const listSchema = new Schema ({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    category: { type: String, },
    recipename: { type: String },
    listname: { type: String },
    items: [{ type: Schema.Types.ObjectId, ref: 'ShopItem' }], //to populate items
    comments: [commentSchema]
}, {
 timestamps: true,
    
})

module.exports = mongoose.model('List', listSchema);
