const express = require("express");
const path = require("path");

const router = express.Router();

const portalServe = async (req, res, next) => {
	res.sendFile(path.join(__dirname, "../../../build/index.html"));
};

module.exports = portalServe;
