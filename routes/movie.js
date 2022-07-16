const express = require("express");
const router = express.Router();

const {
    createFavourites,
    getFavourites
} = require("../controllers/movies");

router.post("/create/favourite", createFavourites);
router.get("/get/favourite/:id", getFavourites)

module.exports = router;
