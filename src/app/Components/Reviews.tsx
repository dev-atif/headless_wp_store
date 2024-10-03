import React, { useState } from "react";
import ReactStars from "react-stars";
interface ProductDetailsProps {
  rev: Product | null;
}
const Reviews: React.FC<ProductDetailsProps> = ({ rev }) => {
  const [visible, setVisibile] = useState(3);
const filteredReviews = rev?.product_reviews?.filter(
  (review: Review) => review.Review_Status !== "Draft"
);
  return (
    <div>
      <div>
        {filteredReviews && filteredReviews.length > 0 ? (
          <>
            {filteredReviews.slice(0, visible).map((review: Review) => (
              <div key={review.id} className="bg-gray-200 my-5 p-4 rounded-xl ">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg flex flex-col font-semibold ">
                    {review.Name}
                    <span className="text-sm font-medium">
                      ({review.Email})
                    </span>
                  </h4>

                  <span className="bg-black text-md text-white px-4  rounded-3xl">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div>
                  {" "}
                  <p className="mt-2 text-base">{review.Review}</p>
                </div>
                <div className="-mt-4 -mb-4">
                  <ReactStars
                    color2="#ffd700"
                    count={5}
                    edit={false}
                    size={50}
                    value={review.rating}
                    half
                  />
                </div>
              </div>
            ))}
            {visible < filteredReviews.length && (
              <button
                onClick={() => setVisibile((prev) => prev + 3)}
                className="mt-4 px-4 py-2 text-white bg-black rounded-lg"
              >
                Show More
              </button>
            )}
          </>
        ) : (
          <div className=" h-28 flex items-center text-xl tracking-wider font-medium text-gray-400">
            No reviews available
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
