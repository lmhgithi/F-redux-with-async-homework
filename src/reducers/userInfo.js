const userInfoReducer = (state = { logged: false, isFetching: false }, action) => {
  if (action.type === 'CLEAR_USER_INFO') {
    return { logged: false };
  }
  if (action.type === 'FETCH_INFO_REQUEST') {
    return { ...state, isFetching: true };
  }
  if (action.type === 'FETCH_INFO_RECEIVE') {
    return { ...state, ...action.payload, logged: true, isFetching: false };
  }
  return state;
};

export default userInfoReducer;
