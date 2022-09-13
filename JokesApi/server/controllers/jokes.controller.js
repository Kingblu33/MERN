const Jokes = require("../model/joke.model")

module.exports.findAllJokes = (req, res) => {
    Jokes.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({ message: "Find all functionality currently unresponsive", err }))
}


module.exports.findOneJoke = (req, res) => {
    Jokes.findById({ _id: req.param._id })
        .then(results => res.json(results))
        .catch(err => res.status(400).json({ message: "Find One functionality currently unresponsive", err }))
}


module.exports.findRandomJoke = (req, res) => {
    console.log("**** Controller - find random joke ****");
    Jokes.find()
        .then(allJokes => {
            const all = [...allJokes];
            console.log(all);
            const randomNumber = Math.floor(Math.random() * allJokes.length);
            const randomJoke = allJokes.length > 0 ? allJokes[randomNumber] : [];
            res.status(200).json({ joke: randomJoke })
        })
        .catch(err => res.status(400).json({ mesage: "Something went wrong", error: err }))
}



module.exports.createNewJoke = (req, res) => {
    Jokes.create(req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({ message: "Create Joke functionality currently unresponsive", err }))

}


module.exports.updateJoke = (req, res) => {
    Jokes.updateOne({ _id: req.param._id }, req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({ message: "Update Joke functionality currently unresponsive", err }))
}

module.exports.deleteJoke = (req, res) => {
    Jokes.deleteOne({ _id: req.params._id })
        .then(results => res.json(results))
        .catch(err => res.status(400).json({ message: "Delete Joke functionality currently unresponsive", err }))

}




