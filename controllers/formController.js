/**
 * @author Jack Napoleone
 * @description Handles submitted forms
 */

// Handles contact form
exports.postedContactForm = (req, res) => {
	res.render("contactSuccess");
};

// Handles contact form
exports.postedMembershipForm = (req, res) => {
	res.render("membershipSuccess");
};
