const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  hobby: { type: String, required: true },
});

module.exports = mongoose.model("Girl", schema);