const Schema = require('mongoose').Schema;

const shopItemSchema = new Schema ({
    name: { type: String, required: true },
    category: { type: String, ref:'Category'},
    discription: { type: String },
    cost: { type: Number, default: 0 },
    qty: { type: Number, default: 0 }
},{
    timestamps:true
});

module.exports = shopItemSchema;

