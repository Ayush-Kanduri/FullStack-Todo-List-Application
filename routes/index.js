const express = require("express");
const router = express.Router();

const homeRouterFile = require("./home");
const createTaskRouterFile = require("./create-task");

router.use("/", homeRouterFile);
router.use("/tasks", createTaskRouterFile);

console.log("Router Loaded");
module.exports = router;
