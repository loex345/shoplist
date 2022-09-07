const Schema = require('mongoose').Schema;
const { default: mongoose } = require('mongoose');
const shopItemSchema = require('./shopItemSchema')

const projectSchema = new Schema({
    projectName: { type: String, default: 'none'},
    projectValue: { type: Number, default: 0.00}
    // may need some vitrual properties
})

const listSchema = new Schema ({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    category: { type: String, required: true},
    recipename: { type: String },
    listname: { type: String },
    item: [{ type: Schema.Types.ObjectId, ref: 'ShopItem' }], //to populate items
    projectName: [projectSchema]
}, {
 timestamps: true,
    
})

module.exports = mongoose.model('List', listSchema);
