const MovieModel = require('../models/favourites');
const { errorHandler } = require('../helpers/dbErrorHandler');


exports.createFavourites = (req, res) => {
    let body = req.body;
    console.log("req.body",body)
    const newRecord = new MovieModel(req.body)
    newRecord.save((err, result) => {
        if (err) {
            console.log('@MOVIE CREATE ERROR ', err);
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(result);
    });
}

exports.getFavourites = (req, res) => {
    const { id } = req.params;
    MovieModel.find({userID: id})
        .then(data => {
            if (!data)
                res.status(404).send({ message: "errCode: Invalid_RequestId. errMsg: No Movie found or invalid User ID " + id })
            else res.send({ data });
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Movie with User id=" + id });
        });
}