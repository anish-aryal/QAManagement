// thunk.js

import { loginSuccess, loginfailure, logout } from './reducer';
import axios from 'axios';
import toast from 'react-hot-toast';

const apiUrl = window.APP_CONFIG.baseapi + "/Login/login";

export const login = (credentials, history) => async (dispatch) => {
  try {
    // Make the API request to perform the login operation.
    const response = await axios.post(apiUrl, credentials);
    const user = response;
    if (user) { // Check if there is data in the response
      // Extract the user data from the response data.

      // Store the user data and token in local storage.
      localStorage.setItem('user', JSON.stringify(user)); // Use JSON.stringify to store an object as a string
      localStorage.setItem('token', user.token);

      // Dispatch the login success action with the user data.



        dispatch(loginSuccess(user));
        console.log('user', user);
        if (user.associatedRoles.includes("SuperAdmin") || user.associatedRoles.includes("SystemAdmin")) {
          console.log('reached admin');
          history('/dashboard');
        } else {
          console.log('reached user');
          history('/project');
        }
        toast.success("Welcome to Ants Quality! ");

    }
    else{
      dispatch(loginfailure());
      toast.error("Invalid username or password. Please try again.");
    }

  } catch (error) {
    dispatch(loginfailure());
    toast.error("Invalid username or password. Please try again.");
  }
};

export const logoutUser = () => (dispatch) => {
  // Clear the user data and token from local storage.
  localStorage.removeItem('user');
  localStorage.removeItem('token');

  // Dispatch the logout action.
  dispatch(logout());
};
