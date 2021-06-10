const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("config");
const path = require("path");

const PortalServe = require("./middleware/portalServe");
const Router = require("./router");

const server = (async () => {
	try {
		const app = express();
		app.use(cors());
		app.use(bodyParser.urlencoded({ extended: false }));
		app.use(bodyParser.json());
		app.use(express.static(path.join(__dirname, "../../build/")));
		app.use(PortalServe);
		app.use("/api", Router);
		app.get("/*", (req, res) => {
			res.sendFile(path.join(__dirname, "../../build", "index.html"));
		});
		const port = process.env.PORT || config.get("port");
		app.listen(port);
		console.log(`Server is running on port : ${port}`);
	} catch (err) {
		console.log(err);
	}
})();

module.exports = server;
