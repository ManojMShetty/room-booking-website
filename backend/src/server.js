const express = require("express");
const cors = require("cors");

const propertyRoutes = require("./routes/properties");

const app = express();
const PORT = process.env.PORT || 5000;

const bookingRoutes = require("./routes/bookings");


// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/bookings", bookingRoutes);


// Routes
app.use("/api/properties", propertyRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
