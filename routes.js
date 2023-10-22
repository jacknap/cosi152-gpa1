const express = require("express");
const router = express.Router();
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

// TODO: replace
router.post("/contact", (req, res) => {
	res.send("thanks");
});

router.use(errorController.pageNotFoundError);
router.use(errorController.internalServerError);

module.exports = router;
