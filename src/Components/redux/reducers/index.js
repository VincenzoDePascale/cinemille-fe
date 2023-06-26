const initialState = {
  myProfile: {},
};

const MainReducer = (state = initialState, action) => {
  switch (action?.type) {
    case "ADD_MY_PROFILE":
      return { ...state, myProfile: action.payload };
    default:
      return state;
  }
};

export default MainReducer;
