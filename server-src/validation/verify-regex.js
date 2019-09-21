const verifyRegex = (mapping,body_mapping) => (req,res,next) => {
	for (const name in mapping) {
		const value = req.params[name];
		const re = mapping[name];
		if (!value.match(re)) {
			next(new Error(`Invalid ${name}: ${value}`));
			return;
		}
	}
	if (body_mapping !== undefined) {
		for (const name in body_mapping) {
			const value = req.body[name];
			const re = body_mapping[name];
			if (!value.match(re)) {
				next(new Error(`Invalid ${name}: ${value}`));
				return;
			}
		}
	}
	next();
};

module.exports = verifyRegex;
