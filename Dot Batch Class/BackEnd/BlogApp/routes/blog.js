const express = require("express");
const router = express.Router();

// Import controller
const { dummyLink , likePost , unlikePost} = require("../controllers/likeController");
const {createComment} = require("../controllers/commentController");
const { createPost , getAllPosts} = require("../controllers/postController");

// Define route
router.get("/dummyroute", dummyLink);
router.post("/comments/create", createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost);

// Export the router
module.exports = router;
