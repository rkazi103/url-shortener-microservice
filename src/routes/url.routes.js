const express = require("express");
const router = express.Router();
const validUrl = require("valid-url");

router.post("/shorturl", (req, res) => {
  const url = req.body.url;

  if (!validUrl.isUri(url)) {
    res.status(400).json({
      error: "Invalid URL",
    });
  }

  res.status(200).json({
    greeting: "shortul",
  });
});

router.get("/shorturl/:short_url", async (req, res) => {});

module.exports = router;
