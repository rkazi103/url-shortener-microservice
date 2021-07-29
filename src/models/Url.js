const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const urlSchema = Schema({
  original: {
    type: String,
    required: true,
  },
  short: Number,
});

module.exports = Url = mongoose.model("Url", urlSchema);
