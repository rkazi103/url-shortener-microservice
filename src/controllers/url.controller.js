const validator = require("validator");
const Url = require("../models/Url");

module.exports = class UrlController {
  static postNewUrl(req, res) {
    const inputUrl = req.body.url;
    let resObject = {};

    if (!validator.isURL(inputUrl)) {
      res.status(400).json({
        error: "Invalid URL",
      });
      return;
    }

    resObject["original_url"] = inputUrl;
    let inputShort = 1;

    Url.findOne({})
      .sort({ short: "desc" })
      .exec((error, result) => {
        if (!error && result != undefined) {
          inputShort = result.short + 1;
        }
        if (!error) {
          Url.findOneAndUpdate(
            { original: inputUrl },
            { original: inputUrl, short: inputShort },
            { new: true, upsert: true },
            (error, savedUrl) => {
              if (!error) {
                resObject["short_url"] = savedUrl.short;
                res.json(resObject);
              }
            }
          );
        }
      });
  }

  static goToShortenedUrl(req, res) {
    const input = req.params.input;

    Url.findOne({ short: input }, (error, result) => {
      if (!error && result != undefined) {
        res.redirect(result.original);
      } else {
        res.json("URL not Found");
      }
    });
  }
};
