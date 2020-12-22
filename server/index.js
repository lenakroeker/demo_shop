const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
require("dotenv").config();

const { testHandler } = require("./handlers");

express()
  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./client/build"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  //endpoints

  //test

  .get("/test", testHandler)

  // Node spins up our server and sets it to listen on port 8000.
  .listen(8000, () => console.log(`Listening on port 8000`));
