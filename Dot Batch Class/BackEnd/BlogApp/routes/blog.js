const express = require("express");
const router = express.Router();

// Import controller
const { dummyLink } = require("../controllers/LikeController");

// Define route
router.get("/dummyroute", dummyLink);

// Export the router
module.exports = router;
