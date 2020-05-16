import {allConstants} from '../Constants/AllConstants.js';
import {allServices} from '../Services/AllServices.js';

export const allActions = {
    loginUser,
    addStudent,
    viewStudents
};

function loginUser(creds) {

  // let config = {
  //   method: 'POST',
  //   headers: { 'Content-Type':'application/x-www-form-urlencoded' },
  //   body: `email=${creds.email}&password=${creds.password}`
  // }

  return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

  //   return axios.post('http://localhost:3001/login', creds)
  //     .then(res => {
  //       if (res.code == 404) {
  //         // If there was a problem, we want to
  //         // dispatch the error condition
  //         dispatch(loginError(res.code))
  //         return Promise.reject(res)
  //       } else {
  //         // If login was successful, set the token in local storage
  //         localStorage.setItem('token', res.data.token)
  //         // Dispatch the success action
  //         dispatch(receiveLogin(res))
  //       }
  //     }).catch(err => console.log("Error: ", err))
  // }
  fetch(`http://localhost:3001/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(creds)
    })
    .then(res => res.json())
    .then(data => {
        // data sent back will in the format of
        // {
        //     user: {},
        //.    token: "aaaaa.bbbbb.bbbbb"
        // }
        console.log(data);
        if(data.code === 201){
          console.log(data);
          localStorage.setItem("token", data.data.token)
          dispatch(receiveLogin(data))
        }
    }).catch(err => console.log("Error : ", err))
  }

  function requestLogin(creds) {
    return {
      type: allConstants.LOGIN_REQUEST,
      isFetching: true,
      isAuthenticated: false,
      creds
    }
  }
  
  function receiveLogin(res) {
    return {
      type: allConstants.LOGIN_SUCCESS,
      isFetching: false,
      isAuthenticated: true,
      token: res.data.token
    }
  }
  
  // function loginError(message) {
  //   return {
  //     type: allConstants.LOGIN_FAILURE,
  //     isFetching: false,
  //     isAuthenticated: false,
  //     message
  //   }
  // }
}

// Logs the user out
export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('token')
    dispatch(receiveLogout())
  }
  function requestLogout() {
    return {
      type: allConstants.LOGOUT_REQUEST,
      isFetching: true,
      isAuthenticated: true
    }
  }
  function receiveLogout() {
    return {
      type: allConstants.LOGOUT_SUCCESS,
      isFetching: false,
      isAuthenticated: false
    }
  }
}

function addStudent(student) {
  return dispatch => {
      dispatch(request(student));
      allServices.addStudent(student);
      dispatch(success(student));
  };
  function request(student) { return { type: allConstants.ADD_PLAYER_REQUEST, student } }
  function success(student) { return { type: allConstants.ADD_PLAYER_SUCCESS, student } }
  // function failure(error) { return { type: allConstants.ADD_PLAYER_FAILURE, error } }
}

function viewStudents() {
  return dispatch => {
      dispatch(request());
      var students = allServices.viewStudents();
      dispatch(success(students));
  };
  function request() { return { type: allConstants.VIEW_ALL_PLAYERS_REQUEST } }
  function success(students) { return { type: allConstants.VIEW_ALL_PLAYERS_SUCCESS, students } }
  // function failure(error) { return { type: allConstants.VIEW_ALL_PLAYERS_FAILURE, error } }
}