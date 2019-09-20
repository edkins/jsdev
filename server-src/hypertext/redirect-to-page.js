const redirectToPage = (page) => (req,res) => {
	res.redirect(page);
};

module.exports = redirectToPage;
