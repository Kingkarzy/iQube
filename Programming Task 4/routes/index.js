const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");
const reviewController = require("../controllers/reviewController");

router.post("/signup", userController.signup);
router.post("/login", userController.login);

router.post("/", reviewController.createReview);
router.get("/", reviewController.getAllReviews);
router.get("/:reviewId", reviewController.getReviewById);
router.post("/:reviewId/helpful", reviewController.markHelpful);
router.get("/sort", reviewController.sortReviews);

module.exports = router;
