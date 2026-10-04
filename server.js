require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const applicationRoutes = require("./routes/applicationRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/applications", applicationRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Strada Education Foundation API is running"
  });
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });