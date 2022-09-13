const sundaeController = require("../controllers/sundae.controller")


module.exports = app => {
    app.get("/api/test", sundaeController.testResponse)
    app.get("/api/sundaes/findall", sundaeController.findAllSundaes)
    app.post("/api/sundaes/create", sundaeController.createSundaes)
    app.get("/api/sundaes/:_id", sundaeController.findOneSundae)
    app.delete("/api/sundae/delete/:_id", sundaeController.deleteOneSundae)
    app.patch("/api/sundae/update/:_id", sundaeController.updateSundae)
    app.put("/api/sundaes/addToppings/:_id", sundaeController.addToppings)

}