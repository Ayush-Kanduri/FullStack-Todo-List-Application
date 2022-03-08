const express = require("express");
const port = 8000;
const app = express();
const path = require("path");
const route = require("./routes/index.js");
const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose.js");

app.use(express.static("./assets"));
app.use(expressLayouts);

app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

app.use(express.urlencoded({ extended: true }));
app.use("/", route);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(port, (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log(`Server is Up & Running Successfully on Port ${port}`);
});
