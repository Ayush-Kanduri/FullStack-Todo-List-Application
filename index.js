const express = require("express");
const port = 8000;
const app = express();
const path = require("path");
const route = require("./routes/index.js");
const expressLayouts = require("express-ejs-layouts");

app.use(expressLayouts);

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
