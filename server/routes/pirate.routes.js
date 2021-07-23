const PirateController = require("../controllers/pirate.controller");

module.exports = app => {
    //GET ALL
    app.get('/api/pirates', PirateController.findAllPirates);
    //CREATE
    app.post('/api/pirates/create', PirateController.createPirate);
    //GET ONE
    app.get('/api/pirates/:_id', PirateController.findOnePirate);
    //UPDATE
    app.put('/api/pirates/update/:_id', PirateController.updateOnePirate);
    //DELETE
    app.delete('/api/pirates/delete/:_id', PirateController.deleteOnePirate);
}