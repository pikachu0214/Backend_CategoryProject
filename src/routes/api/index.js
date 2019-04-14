const express = require("express");
const router = express.Router();
const category = require("./category.js");

router.use("/category", category);

module.exports = router;
