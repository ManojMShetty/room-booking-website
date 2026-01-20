const express = require("express");
const router = express.Router();

const properties = require("../data/properties");

// GET all properties
router.get("/", (req, res) => {
    res.json(properties);
});

module.exports = router;
