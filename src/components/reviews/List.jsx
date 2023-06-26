import React from "react";
import { useDispatch, useSelector } from "react-redux";

const List = () => {
  const reviews = useSelector((state) => {
    return state.reviews;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h2>댓글</h2>
        {reviews.map((review) => {
          return (
            <div
              key={review.id}
              style={{
                border: "1px solid black",
                padding: "10px",
                margin: "10px",
              }}
            >
              {review.id} <br />
              <br />
              {review.body}
              <br />
              <button
                onClick={() => {
                  dispatch({
                    type: "ADD_REVIEW",
                    payload: review.id,
                  });
                }}
              >
                추가
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
