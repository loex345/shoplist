const Schema = require('mongoose').Schema;

const grocerySchema = new Schema ({
    name: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref:'Category'},
    discription: { type: String },
    cost: { type: Number, default: 0 },
    qty: { type: Number, default: 0 }
},{
    timestamps:true
});

module.exports = grocerySchema;

