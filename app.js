const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json()); 
app.use("/api/auth", require("./routes/authroutes"));
app.use("/api/blogs", require("./routes/blogRoutes"));

module.exports = app;
