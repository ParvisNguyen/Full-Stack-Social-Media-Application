const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require('./models');

// Routers
const postsRouter = require('./routes/Posts');
const commentsRouter = require('./routes/Comments'); // Import the Comments router

app.use('/posts', postsRouter);
app.use('/comments', commentsRouter); // Use the Comments router

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
});
