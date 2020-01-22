const LoggedInReducer = (state = false, action) => {
  console.log(state);
  switch (action.type) {
    case "LOGIN":
      return !state;
    default:
      return state;
  }
};

export default LoggedInReducer;
