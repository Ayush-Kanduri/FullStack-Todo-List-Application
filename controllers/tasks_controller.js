module.exports.createTask = (req, res) => {
	return res.end(`<h1>${JSON.stringify(req.body)}</h1>`);
};
