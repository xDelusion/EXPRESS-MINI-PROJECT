const Movie = require("../../models/Movie");

exports.moviesCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.posterImage = `${req.file.path.replace("\\", "/")}`;
    } /*                                 .filename}    */
    const newMovie = await Movie.create(req.body);
    return res.status(201).json(newMovie);
  } catch (error) {
    return next(error);
  }
};
