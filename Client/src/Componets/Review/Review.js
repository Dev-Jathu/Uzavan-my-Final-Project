import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Review.css";

const StarRating = ({ rating, setRating }) => {
  const handleStarClick = (star) => {
    setRating(star === rating ? 0 : star);
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          type="button"
          key={star}
          className={star <= rating ? "on" : "off"}
          onClick={() => handleStarClick(star)}
        >
          <span className="star">&#9733;</span>
        </button>
      ))}
    </div>
  );
};

const ReviewForm = ({ username, ownerName, booking }) => {
  const [name, setName] = useState(username);
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  useEffect(() => {
    setName(username);
  }, [username]);

  useEffect(() => {
    switch (rating) {
      case 1:
        setComment("Very bad");
        break;
      case 2:
        setComment("Bad");
        break;
      case 3:
        setComment("Average");
        break;
      case 4:
        setComment("Good");
        break;
      case 5:
        setComment("Very good");
        break;
      default:
        setComment("");
    }
  }, [rating]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://uzavan-my-final-project-1-server.onrender.com/Review/addreviews", {
        name,
        email,
        rating,
        comment,
        ownerName: ownerName, // Include owner name in the review data
        bookingId: booking._id // Include booking ID in the review data
      });
      console.log(response.data);

      alert("Your review is successfully added");

      // Clear the form fields after submission
      setEmail("");
      setRating(0);
      setComment("");
    } catch (error) {
      console.error("There was an error submitting the review:", error);
    }
  };

  return (
    <div className="mainreview">
      <form onSubmit={handleSubmit}>
        <div>
          <p className="ratinghed">Your Rating Here!</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="reviewnametext"
            readOnly // Make the name field read-only
          />
        </div>
        <br />
        <div>
          <input
            type="text"
            value={ownerName}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="reviewnametext1"
            
          />
        </div>
        <div className="starrating">
          <StarRating rating={rating} setRating={setRating} />
        </div>
        <div>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            className="reviewcomment"
            placeholder="Comment here"
          />
        </div>
        <button type="submit" className="reviebutton">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
