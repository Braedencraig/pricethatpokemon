import axios from 'axios';
import { GET_ERRORS, GET_USERS } from './types'; // Register User

export const registerUser = (userData) => dispatch => {
  axios
    .post('/api/users/register', userData)
    // .then(res => history.push('/login')) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}; 

export const getUsers = () => dispatch => {
  axios
    .get('/api/users/leaderboard')
      .then(res => 
        dispatch({
          type: GET_USERS,
          payload: res.data
        })
      )
}; 
