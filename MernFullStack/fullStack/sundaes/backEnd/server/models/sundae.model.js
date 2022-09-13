const mongoose = require("mongoose");


const SundaeSchema = new mongoose.Schema({
    name: String,
    flavor: String,
    toppings: [String],
    numScoops: Number,
    WhippedCreamCherry: Boolean
}, { timestamps: true })


const Sundae = mongoose.model("Sundae", SundaeSchema);


module.exports = Sundae;