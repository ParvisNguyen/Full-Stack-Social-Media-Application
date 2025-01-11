const express = require('express'); // Import the express module
const router = express.Router(); // Create a new router
const { Comments } = require('../models'); // Import the Comments model

router.get('/:postId', async (req, res) => {
    const postId = req.params.postId; // Get the postId from the request
    const comments = await Comments.findAll({ where: { PostId: postId } }); // Find comments by postId
    res.json(comments); // Send the comments as a response
});

router.post('/', async (req, res) => {
    const comment = req.body; // Get the comment from the request
    await Comments.create(comment); // Create a new comment
    res.json(comment); // Send the comment as a response
});

module.exports = router; // Export the router