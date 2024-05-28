const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import category-related actions
const { browse, read } = require("../../../controllers/categoryActions");

// Route to get a list of categories
router.get("/", browse);

// Route to get a specific category by ID
router.get("/:id", read);

/* ************************************************************************* */

module.exports = router;
