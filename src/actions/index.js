export const logOut = () => {
  // eslint-disable-line
  return {
    type: 'CLEAR_USER_INFO'
  };
};

const fetchInfoRequest = () => {
  return {
    type: 'FETCH_INFO_REQUEST'
  };
};

const fetchInfoReceive = data => {
  return {
    type: 'FETCH_INFO_RECEIVE',
    payload: data
  };
};

// thunk
// export const fetchInfo = () => dispatch => {
//   dispatch(fetchInfoRequest());
//   return fetch('https://my-json-server.typicode.com/kevindongzg/demo/login')
//     .then(res => res.json())
//     .then(data => dispatch(fetchInfoReceive(data)));
// };

// promise
export const fetchInfo = dispatch => {
  dispatch(fetchInfoRequest());
  return fetch('https://my-json-server.typicode.com/kevindongzg/demo/login').then(res =>
    fetchInfoReceive(res.json())
  );
};
