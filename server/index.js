const express = require('express') //Express is a Node.js web application framework
const app = express(); // Create an Express application
const cors = require("cors"); 

app.use(express.json()); // Use the JSON middleware
app.use(cors()); // Use the CORS middleware

const db = require('./models'); // Import the models

//Routers
const postsRouter = require('./routes/Posts'); // Import the Posts router
app.use('/posts', postsRouter); // Use the Posts router

db.sequelize.sync().then(() => { // Sync the models
    app.listen(3001, () => { // Listen on port 3001
        console.log("Server running on port 3001") // Log a message to the console
    });
});
