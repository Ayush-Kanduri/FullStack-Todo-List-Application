//----------------------------------------------------------------//
//Main Entry Point of the Express Server App//
//----------------------------------------------------------------//
//Require Express Module for running the Express Server
const express = require("express");
//Create Port
const port = process.env.PORT || 8000;
//Create Express App for Request-Response Cycle & to create the Express Server
const app = express();
//Require Module Path for Directory
const path = require("path");
//Requires the index.js - Route File, from the Routes Folder
const route = require("./routes/index.js");
//Requires express-ej-layouts Module
const expressLayouts = require("express-ejs-layouts");
//Requires MongoDB
const db = require("./config/mongoose.js");
//Requires cors Module
const cors = require("cors");
//Requires Dotenv Module
const dotenv = require("dotenv").config();


//Use the Cors Module
app.use(cors());
//Middleware - Express App uses Static Files in the Assets Folder
app.use(express.static("./assets"));
//Middleware - Express App uses expressLayouts to tell that the views which are going to be rendered belongs to some layout
app.use(expressLayouts);

//Set Up - Extract Styles and Scripts from Sub Pages into the Layout
app.set("layout extractStyles", true);
//Set Up - Extract Styles and Scripts from Sub Pages into the Layout
app.set("layout extractScripts", true);

//Middleware - URL Encoder
app.use(express.urlencoded({ extended: true }));
//Middleware - App calls index.js - Route File, whenever '/' route is called in the request
app.use("/", route);

//Set Up - Template Engine as EJS
app.set("view engine", "ejs");
//Set Up - Template Engine Views Folder Path (..../views)
app.set("views", path.join(__dirname, "views"));

//Run the ExpressJS Server
app.listen(port, (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log(`Server is Up & Running Successfully on Port ${port}`);
});
