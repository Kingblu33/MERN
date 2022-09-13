//import model
const Sundae = require("../models/sundae.model")


module.exports.testResponse = (req, res) => {
    res.json({ message: "in a file wooptietie woop wap wap wap" });
}


module.exports.findAllSundaes = (req, res) => {
    Sundae.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({ message: "Find all functionality currently unresponsive", err }))
}


module.exports.createSundaes = (req, res) => {
    Sundae.create(req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({ message: "Find all functionality currently unresponsive", err }))

}



module.exports.findOneSundae = (req, res) => {
    Sundae.findOne({ _id: req.params._id })
        .then(results => res.json(results))
        .catch(err => res.status(400).json({ message: "Find all functionality currently unresponsive", err }))
}


module.exports.deleteOneSundae = (req, res) => {
    Sundae.deleteOne({ _id: req.params._id },
        { new: true, runValidators: true })
        .then(results => res.json(results))
        .catch(err => res.status(400).json({ message: "Find all functionality currently unresponsive", err }))
}


module.exports.updateSundae = (req, res) => {
    Sundae.findOneAndUpdate({ _id: req.params._id }, req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({ message: "Find all functionality currently unresponsive", err }))
}


module.exports.addToppings = (req, res) => {
    Sundae.updateOne({ _id: req.params._id }, { $push: { toppings: req.body.topping } })
        .then(results => res.json(results))
        .catch(err => res.status(400).json({ message: "Add Toppings functionality currently unresponsive", err }))
}