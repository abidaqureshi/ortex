const reducer = (state, action) => {
  switch (action.type) {
    case 'FEED_UPDATE': {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
