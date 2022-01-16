import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  // LOGIN_SUCCESS,
  // LOGIN_FAIL,
  // LOGOUT,
  CLEAR_ERRORS,
} from '../types';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = async () => {
    // TODO:
    // load token into global headers
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get('/api/auth');

      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  // Register User
  const register = async (FormData) => {
    // FormData is the data from the form (name, email, password) in Register.js (Register.js)
    const config = {
      headers: {
        // Headers are used to specify the data type and other metadata about the request or response payload.
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/users', FormData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL, // REGISTER_FAIL is a type in authReducer file (authReducer.js) in auth folder
        payload: err.response.data.msg, // err.response.data.msg is the error message from the server side (server/routes/users.js) in the register() method
      });
    }
  };

  // Login User
  const login = () => console.log('login user ');

  // Logout User
  const logout = () => console.log('logout user ');

  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        login,
        logout,
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
