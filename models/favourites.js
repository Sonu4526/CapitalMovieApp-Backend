const mongoose = require("mongoose");

const FavouriteSchema = new mongoose.Schema(
    {
        original_title: {
            type: String,
            maxlength: 200
        },
        overview: {
            type: String,
            maxlength: 2000
        },
        id: {
            type: Number,
            trim: true,
            maxlength: 32
        },
        userID:{
            type: String,
        },
        poster_path: {
            type: String,
        },
        release_date: {
            type: String,
        },
        vote_average: {
            type: Number,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Favourite", FavouriteSchema);
