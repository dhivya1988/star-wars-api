const express = require("express");

const app = express();

const PORT = 3000;

const characters = [
    {
        name: "Luke Skywalker",
        movies: [
            "Star Wars",
            "The Empire Strikes Back",
            "Return of the Jedi"
        ]
    },
    {
        name: "Darth Vader",
        movies: [
            "Star Wars",
            "The Empire Strikes Back",
            "Return of the Jedi"
        ]
    },
    {
        name: "Leia Organa",
        movies: [
            "Star Wars",
            "The Empire Strikes Back",
            "Return of the Jedi"
        ]
    }
];

app.get("/api/characters", (req, res) => {
    res.json(characters);
});

app.listen(PORT, () => {
    console.log("Server is running on http://localhost:3000");
});