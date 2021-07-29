const express = require("express");
const router = express.Router();
const UrlController = require("../controllers/url.controller");

router.post("/shorturl", UrlController.postNewUrl);
router.get("/shorturl/:input", UrlController.goToShortenedUrl);

module.exports = router;
