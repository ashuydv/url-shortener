const express = require("express");
const {
  handleGenerateNewShortUrl,
  handleGetAnalytics,
  handleRedirectShortId,
} = require("../controllers/url");
const URL = require("../models/url");

const router = express.Router();

router.post("/", handleGenerateNewShortUrl);

router.get("/:shortId", handleRedirectShortId);

router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
