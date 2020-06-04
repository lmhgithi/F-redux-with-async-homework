export const setUserInfo = info => {
  // eslint-disable-line
  return {
    type: 'SET_USER_INFO',
    payload: info
  };
};

export const clearUserInfo = () => {
  // eslint-disable-line
  return {
    type: 'CLEAR_USER_INFO'
  };
}
