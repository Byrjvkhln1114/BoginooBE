const mongoose = require("mongoose");
const shortId = require("shortid");

const Urls = new mongoose.Schema({
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate,
  },
  createdAt: { type: Date, default: Date.now() },
});
const UrlsModel = mongoose.model("Urls", Urls);
module.exports = UrlsModel;
