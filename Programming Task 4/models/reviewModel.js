const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    reviewId: {
      type: String,
      unique: true,
      required: true,
    },
    userId: {
      type: String,
      reference: User,
      required: true,
    },
    apartmentId: {
      type: String,
      required: true,
    },
    landlordRating: { type: Number, min: 1, max: 5, required: true },
    environmentRating: { type: Number, min: 1, max: 5, required: true },
    amenitiesRating: { type: Number, min: 1, max: 5, required: true },
    reviewText: { type: String, required: true },
    images: [{ type: String }],
    videos: [{ type: String }],
    helpfulCount: { type: Number, default: 0 },
    created_at: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
