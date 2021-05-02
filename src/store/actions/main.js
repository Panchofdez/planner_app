export const addAssignment = (assignments) => {
  return {
    type: "ADD_ASSIGNMENT",
    payload: assignments,
  };
};

export const addTotalHours = (hours) => {
  return {
    type: "ADD_TOTAL_HOURS",
    payload: hours,
  };
};

export const loadAssignment = (assignments) => {
  return (dispatch) => {
    dispatch(addAssignment(assignments));
  };
};

export const loadHours = (hours) => {
  return (dispatch) => {
    dispatch(addTotalHours(hours));
  };
};
