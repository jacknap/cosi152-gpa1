/**
 * @author Jack Napoleone
 * @description Contains an express router object which makes calls to render pages and the error controller.
 */

const express = require("express");
const router = express.Router();
const contactController = require("./controllers/formController");
const errorController = require("./controllers/errorController");

router.get("/", (req, res) => {
	res.render("index");
});

router.get("/about", (req, res) => {
	res.render("about");
});

router.get("/facilities", (req, res) => {
	res.render("facilities");
});

router.get("/programs", (req, res) => {
	res.render("programs");
});

router.get("/events", (req, res) => {
	res.render("events");
});

router.get("/membership", (req, res) => {
	res.render("membership");
});

router.get("/contact", (req, res) => {
	res.render("contact");
});

// calls contactController
router.post("/contact", contactController.postedContactForm);
router.post("/contactSuccess", contactController.postedContactForm);
router.post("/membership", contactController.postedMembershipForm);
router.post("/membershipSuccess", contactController.postedMembershipForm);

// call errorController
router.use(errorController.pageNotFoundError);
router.use(errorController.internalServerError);

module.exports = router;
