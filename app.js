//imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const petsRoutes = require("./routes/petRoutes");
const connectDB = require("./database.js");
const notFoundHandler = require("./middleware/notFoundHandler.js");
const errorHandler = require("./middleware/errorHandler.js");
const path = require("path");
const petRouter = require("./api/pets.routes.js");

//init
const PORT = process.env.PORT;
dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/media", express.static(path.join(__dirname, "media")));
app.use((req, res, next) => {
  console.log("IM A MIDDLEWARE");
  next();
});

app.use((req, res, next) => {
  console.log("IM A MIDDLEWARE 2");
  next();
});

// MongoDB connection
connectDB();
console.log(path.join(__dirname, "media"));

// Routes
app.use("/api/pets", petsRoutes);

// Not Found Handling middleware
app.use(notFoundHandler);

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
