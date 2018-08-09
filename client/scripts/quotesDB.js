const mongoose = require("mongoose");
const db = require("../models");

[
    {
        "content": "'You're really cute for an engineer'",
        "votes": 0,
        "isAppropriate": true
    },
    {
        "content": "'Wow! You're pretty good at this for a woman!'",
        "votes": 0,
        "isAppropriate": true
    },
    {
        "content": "'Can you show me where the developers work?'",
        "votes": 0,
        "isAppropriate": true
    },
    {
        "content": "'You know, that happens to men too'",
        "votes": 0,
        "isAppropriate": true
    },
    {
        "content": "Wow! I didn't know you guys had a Unicorn!",
        "votes": 0,
        "isAppropriate": true
    }
]

db.Quote
    .remove({})
    .then(() => db.Quote.collection.insertMany(quotesSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });