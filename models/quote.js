const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
  content: { type: String, required: true },
  votes: Number,
  isAppropriate: Boolean,
  date: { type: Date, default: Date.now }
});

const Quote = mongoose.model("Quote", quoteSchema);

module.exports = Quote;
