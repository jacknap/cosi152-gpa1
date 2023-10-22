/**
 * @author Jack Napoleone
 * @description Main file for the node.js server, routes are stored in a seperate file and called from here.
 */

const express = require("express");
const layouts = require("express-ejs-layouts");
const router = require("./routes");

const app = express();
app.set("view engine", "ejs");
app.use(layouts);
app.use(express.static("public"));

app.set("port", process.env.PORT || 8000);

// Store routes in a seperate file
app.use(router);

app.listen(app.get("port"), () => {
	console.log(`Server running at http://localhost:${app.get("port")}`);
});
