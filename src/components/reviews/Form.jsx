import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";

const Form = () => {
  const [body, setBody] = useState("");

  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(e) => {
        if (!body) {
          alert("필수값이 누락되었습니다. 확인해주세요.");
          return false;
        }

        e.preventDefault();

        dispatch({
          type: "ADD_TODO",
          payload: {
            id: shortid.generate(),
            body: body,
          },
        });
        setBody("");
      }}
    >
      <div>
        <label>내용</label>
        <input
          type="text"
          name="body"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
      </div>
      <button>추가하기</button>
    </form>
  );
};

export default Form;
