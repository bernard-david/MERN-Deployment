const Pirate = require('../models/pirate.model');

//Create
module.exports.createPirate = (req, res) => {
    Pirate.create(req.body)
        .then(newPirate => res.json(newPirate))
        .catch(err => res.json({message: "Something went wrong when creating a new Pirate!!", error: err}))
}

//Get all
module.exports.findAllPirates = (req, res) => {
    Pirate.find().sort({name: 1})
        .then(allPirates => res.json(allPirates))
        .catch(err => res.json({message: "Something went wrong when getting all the Pirates!!", error: err}))
}

//GET ONE
module.exports.findOnePirate = (req, res) => {
    Pirate.findOne({_id: req.params._id})
        .then(onePirate => res.json(onePirate))
        .catch(err => res.json({message: "Something went wrong when getting one Pirate!!", error: err}))
}

//UPDATE
module.exports.updateOnePirate = (req, res) => {
    Pirate.updateOne({_id: req.params._id}, req.body, {runValidators: true})
        .then(onePirate => res.json(onePirate))
        .catch(err => res.json({message: "Something went wrong when updating a Pirate!!", error: err}))
}

//DELETE
module.exports.deleteOnePirate = (req, res) => {
    Pirate.deleteOne({_id: req.params._id})
        .then(onePirate => res.json(onePirate))
        .catch(err => res.json({message: "Something went wrong when deleting a Pirate!!", error: err}))
}