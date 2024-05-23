const Review = require("../models/review");

exports.createReview = async (req, res) => {
  try {
    const {
      userId,
      apartmentId,
      landlordRating,
      environmentRating,
      amenitiesRating,
      reviewText,
      images,
      videos,
    } = req.body;
    const review = new Review({
      userId,
      apartmentId,
      landlordRating,
      environmentRating,
      amenitiesRating,
      reviewText,
      images,
      videos,
    });
    await review.save();
    res.json({
      success: true,
      message: "Review posted successfully",
      reviewId: review._id,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
      .populate("userId", "username")
      .sort({ created_at: -1 });
    res.json({ success: true, reviews });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.reviewId).populate(
      "userId",
      "username"
    );
    if (!review) {
      return res
        .status(404)
        .json({ success: false, message: "Review not found" });
    }
    res.json({ success: true, review });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.markHelpful = async (req, res) => {
  try {
    const review = await Review.findById(req.params.reviewId);
    if (!review) {
      return res
        .status(404)
        .json({ success: false, message: "Review not found" });
    }
    review.helpfulCount += 1;
    await review.save();
    res.json({
      success: true,
      message: "Marked as helpful",
      helpfulCount: review.helpfulCount,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.sortReviews = async (req, res) => {
  try {
    const { sortBy } = req.query;
    const sortCriteria =
      sortBy === "helpful" ? { helpfulCount: -1 } : { created_at: -1 };
    const reviews = await Review.find()
      .populate("userId", "username")
      .sort(sortCriteria);
    res.json({ success: true, reviews });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
