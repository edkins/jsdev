const verifyRegex = mapping => (req,res,next) => {
	for (const name in mapping) {
		const value = req.params[name];
		const re = mapping[name];
		if (!value.match(re)) {
			next(new Error(`Invalid ${name}: ${value}`));
			return;
		}
	}
	next();
};

module.exports = verifyRegex;
