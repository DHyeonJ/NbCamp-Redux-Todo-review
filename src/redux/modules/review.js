// import shortid from "shortid";

const initialState = { review: [] };

const review = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_REVIEW":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default review;
