//Require the existing Express
const express = require("express");
//Create a Local Router
const router = express.Router();

//Require Home Controller
const homeController = require("../controllers/home_controller");

//Access the Home Controller's home() Function by '/' route
router.get("/", homeController.home);

//Export the Router
module.exports = router;
