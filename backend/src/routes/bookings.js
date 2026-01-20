const express = require("express");
const router = express.Router();

const bookings = require("../data/bookings");

// CREATE booking
router.post("/", (req, res) => {
    const booking = {
        id: Date.now(),
        ...req.body,
    };

    bookings.push(booking);

    res.status(201).json({
        message: "Booking successful",
        booking,
    });
});

// GET all bookings (for testing)
router.get("/", (req, res) => {
    res.json(bookings);
});

module.exports = router;
