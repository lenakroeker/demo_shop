"use strict";
require("dotenv").config;

const testHandler = (req, res) => {
  console.log("test success");
  res.status(200).json({ status: 200, data: "it works" });
};

module.exports = { testHandler };
