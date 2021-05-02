const main = (state = { assignments: [], totalHours: 0 }, action) => {
  switch (action.type) {
    case "ADD_ASSIGNMENT":
      return { ...state, assignments: [...action.payload] };
    case "ADD_TOTAL_HOURS":
      return { ...state, totalHours: action.payload };
    default:
      return state;
  }
};

export default main;
