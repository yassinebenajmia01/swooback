const mongoose = require("mongoose");

const techCategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String },
    language: { type: String },
    productCount: { type: Number, default: 0 },  
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("TechCategory", techCategorySchema);