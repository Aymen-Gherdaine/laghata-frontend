import React, { useState, useEffect } from "react";
import Review from "./Review";
import ReviewForm from "./ReviewForm";
import { useUser } from "../hooks/useUser";

const Reviews = ({ currentUserId, listingId, reviewsIds }) => {
  // check if user is logged in if not he can see reviews but can't send one
  const user = useUser();
  // state to store all comment or reviews that we get from backend
  const [reviews, setReviews] = useState([]);

  // fetch the reviews on mount
  useEffect(() => {
    try {
      // finction that handle the fetch of all reviews for this listing form our db
      const getAllReviewsHandler = async () => {
        // we check if there are reviews in this listing
        if (reviewsIds.length > 0) {
          // fetching all reviews form our db
          const AllReviews = await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/api/reviews/listing/${listingId}`
          );

          if (AllReviews.ok) {
            // parse the response data
            const parsedAllReviews = await AllReviews.json();

            if (parsedAllReviews.data.length > 0) {
              // set the reviews state to the data received
              setReviews(parsedAllReviews.data);
            }
          }
        }
      };
      getAllReviewsHandler();
    } catch (error) {
      console.log(error.stack);
    }
  }, [listingId]);

  return (
    <>
      <h2>Reviews</h2>
      {user && (
        <>
          <h4>Your Review Is Important For Us</h4>
          <ReviewForm
            setReviews={setReviews}
            reviews={reviews}
            currentUserId={currentUserId}
            listingId={listingId}
          />
        </>
      )}

      <div>
        {reviews &&
          reviews.map((review) => {
            return <Review key={review._id} review={review} />;
          })}
      </div>
    </>
  );
};

export default Reviews;
