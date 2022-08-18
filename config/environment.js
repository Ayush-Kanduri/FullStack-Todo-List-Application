//Require the Dotenv Library
const dotenv = require("dotenv").config();

//Development Environment
const development = {
	name: process.env.ENVIRONMENT,
	db: process.env.DB_DEVELOPMENT,
	db_name: process.env.DB_NAME_DEVELOPMENT,
	deployment: process.env.DEPLOYMENT,
};

//Production Environment
const production = {
	name: process.env.ENVIRONMENT,
	db: process.env.DB,
	db_name: process.env.DB_NAME,
	deployment: process.env.DEPLOYMENT,
};

module.exports = production;
