const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  sport: { type: String, required: true },
});

module.exports = mongoose.model("Boy", schema);