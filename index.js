const express = require("express");
const layouts = require("express-ejs-layouts");
const router = require("./routes");

const app = express();
app.set("view engine", "ejs");
app.use(layouts);
app.use(express.static("public"));

app.set("port", process.env.PORT || 8000);

app.use(router);

app.listen(app.get("port"), () => {
	console.log(`Server running at http://localhost:${app.get("port")}`);
});
