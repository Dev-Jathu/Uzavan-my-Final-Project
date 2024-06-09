const Review = require('../model/review');

const createReview = async (req, res) => {
  try {
    const { name, ownerName, rating, comment } = req.body;
    const newReview = new Review({ name, ownerName, rating, comment });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createReview, getReviews };
