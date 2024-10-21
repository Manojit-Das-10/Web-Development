
const express = require("express");
const app = express();

require ("dotenv").config();
const PORT = process.env.PORT || 6000;

// middleware
app.use(express.json());

const blog = require("./routes/blog");

// mount
app.use("/api/v1",blog);

const connectDb = require ("./config/database");
connectDb();

// start the server
app.listen(PORT, () => {
    console.log(`App is started at the port ${PORT}`);
})

app.get("/" , (req,res) => {
    res.send(`<h1>This is my homepage baby</h1>`)
})