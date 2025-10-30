const express = require("express");
const router = express.Router();
const { createBlog, getBlogs } = require("../controllers/blogController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, createBlog);
router.get("/",authMiddleware, getBlogs);

module.exports = router;
