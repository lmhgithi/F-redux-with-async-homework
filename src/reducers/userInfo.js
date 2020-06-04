const userInfo = (state = { logged: false }, action) => {
  if (action.type === 'SET_USER_INFO') {
    return { ...state, ...action.payload };
  }
  if (action.type === 'CLEAR_USER_INFO') {
    return { logged: false };
  }
  return state;
};

export default userInfo;
