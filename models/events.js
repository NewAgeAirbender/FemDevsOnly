const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  group: { type: String, required: true },
  title: { type: String, required: true },
  location: { type: String, required: true },
  link: { type: String, required: true },
  date: { type: Date, default: Date.now },
  interest: Number
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
