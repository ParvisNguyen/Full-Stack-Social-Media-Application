const express = require('express'); // Import the express module
const router = express.Router(); // Create a new router
const { Posts } = require('../models');// Import the Posts model 

router.get("/", async (req, res) => {
    const listOfPosts = await Posts.findAll(); // Get all the posts
    res.json(listOfPosts); // Send the posts as a response
}); 

router.post("/", async (req, res) => {
    const post = req.body; // Get the post from the request
    await Posts.create(post); // Create a new post
    res.json(post); // Send the post as a response
});

module.exports = router; // Export the router 