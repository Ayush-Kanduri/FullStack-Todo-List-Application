const express = require("express");
const router = express.Router();

const homeRouterFile = require("./home");
const taskRouterFile = require("./tasks");
const taskListRouterFile = require("./task-list");

router.use("/", homeRouterFile);
router.use("/task-list", taskListRouterFile);
router.use("/tasks", taskRouterFile);

console.log("Router Loaded");
module.exports = router;
