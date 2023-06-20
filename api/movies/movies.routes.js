const express = require("express");
const router = express.Router();
const uploader = require("../../middlewares/uploader");
const { moviesCreate } = require("./movies.controllers");

// router.param("movieId", async (req, res, next, movieId) => {
//   try {
//     const foundMovie = fetchMovie(movieId);
//     if (!foundMovie) return next({ status: 404, message: "Post not found" });
//     console.log(foundMovie);
//     req.post = foundMovie;
//     return next();
//   } catch (error) {
//     return next(error);
//   }
// });

router.post("/", uploader.single("posterImage"), moviesCreate);

module.exports = router;
