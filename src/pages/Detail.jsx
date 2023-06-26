import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import List from "../components/reviews/List";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);
  // const reviews = useSelector((state) => state.reviews);

  const todo = todos.filter((todo) => todo.id === id)[0];
  // const review = reviews.filter((review) => review.id === todo.id)[0];

  return (
    <div>
      <div>
        {todo.id}
        <br />
        {todo.title}
        <br />
        {todo.body}
        <br />
        {todo.isDone.toString()}
        <br />
        <button onClick={() => navigate("/")}>이전 화면으로</button>
      </div>
      <br />
      <List />
      {/* {review.body} */}
    </div>
  );
};

export default Detail;
