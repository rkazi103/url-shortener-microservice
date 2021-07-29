const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const urlSchema = Schema({
  link: {
    type: String,
    required: true,
  },
});

module.exports = Url = mongoose.model("Url", urlSchema);
