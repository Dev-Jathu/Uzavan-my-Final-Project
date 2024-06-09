const express = require('express');
const { createReview, getReviews } = require('../controller/reviewController');
const router = express.Router();

router.post('/addreviews', createReview);
router.get('/reviews', getReviews);

module.exports = router;
