
// Server instantiate
const express = require("express");
const app = express();

// Load config from env
require("dotenv").config();
const PORT = process.env.PORT || 4000

// Middleware to parse JSON request body
app.use(express.json());

// Import routes for TODO API
const todoRoutes = require("./routes/todos");

// Mount the TODO APIs routes
app.use("/api/v1", todoRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
})

// Connect to the database
const dbConnect = require("./config/database");
dbConnect();

// Default route
app.get("/", (req, res) => {
    res.send(`<h1>This is the HomePage baby</h1>`);
});
 
