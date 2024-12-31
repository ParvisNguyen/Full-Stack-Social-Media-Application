const express = require('express') //Express is a Node.js web application framework
const app = express(); // Create an Express application

app.listen(3001, () => { // Listen on port 3001
    console.log("Server running on port 3001") // Log a message to the console
});
 