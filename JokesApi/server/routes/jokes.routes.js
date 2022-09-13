const jokesController = require("../controllers/jokes.controller")



module.exports = app => {
    app.get("/api/jokes", jokesController.findAllJokes)
    app.get("/api/jokes/getrandomjoke", jokesController.findRandomJoke)
    app.get("/api/jokes/:_id", jokesController.findOneJoke)
    app.post("/api/jokes/create", jokesController.createNewJoke)
    app.put("/api/jokes/update/:_id", jokesController.updateJoke)
    app.delete("/api/jokes/delete/:_id", jokesController.deleteJoke)

}


