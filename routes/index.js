const express = require("express");
const router = express.Router();

const homeRouterFile = require("./home");
const taskRouterFile = require("./tasks");

router.use("/", homeRouterFile);
router.use("/tasks", taskRouterFile);

console.log("Router Loaded");
module.exports = router;
