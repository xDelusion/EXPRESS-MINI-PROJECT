const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const connectDB = require("./database");
connectDB();
const dotenv = require("dotenv");
dotenv.config();
const moviesRoutes = require("./api/movies/movies.routes");
const notFound = require("./middlewares/notFound");
const errorHandle = require("./middlewares/errorHandle");

app.use("/media/", express.static(path.join(__dirname, "media")));
app.use(morgan("dev"));
app.use(express.json());
app.use("/movies", moviesRoutes);
app.use(notFound);
app.use(errorHandle);

app.listen(process.env.PORT, () => {
  console.log(`The application is running on localhost:${process.env.PORT}`);
});
