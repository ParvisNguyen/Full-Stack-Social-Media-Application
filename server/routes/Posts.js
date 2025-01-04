const express = require('express'); // Import the express module
const router = express.Router(); // Create a new router

router.get("/", (req, res) => {
    res.send("Hello World!"); // Send a response to the client
}); 


module.exports = router; // Export the router 