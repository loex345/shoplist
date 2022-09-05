const Schema = require('mongoose').Schema;
const { default: mongoose } = require('mongoose');
const grocerySchema = require('./grocerySchema')

const projectSchema = new Schema({
    projectName: { type: String, default: 'none'},
    projectValue: { type: Number, default: 0.00}
    // main need some vitrual properties
})

const recipeSchema = new Schema ({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true},
    ingredients: { type: String, required: true},
    groceryItems: grocerySchema,
    projectName: [projectSchema]
}, {
 timestamps: true,
    
})

module.exports = mongoose.model('Recipe', recipeSchema);
