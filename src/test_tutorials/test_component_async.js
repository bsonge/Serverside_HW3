import {applyMiddleware, createStore} from "redux";
import axios from "axios";  //fetch http library
import thunk from "redux-thunk";

const initialState = {
  fetching: false;
  fetched: false;
  users: [];
  error: null;
}


const reducer = (state={initialState}, action)=>{
  switch(action.type){
    case "FETCH_USERS_PENDING":{
      return{...state, fetching: true}
      break;
    }
    case "FETCH_USERS_REJECTED":{
      return{...state, fetching: false, error: action.payload}
      break;
    }
    case "RECIEVE_USERS_FULFILED":{
      return{
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload,
      }
      break;
    }
  }
  return state;
}


const middleware = applyMiddleware(thunk, logger());
const store = createStore(reducer, middleware) // later move 1 to reducer


store.dispatch(
{
  type: "FETCH_USERS",
  payload: axios.get("http://rest.learncode.academy/api/wstern/users"),
})


//  without promise middleware, change reducer to match dispatch types
// store.dispatch((dispatch)=>{
//   dispatch({type: "FETCH_USERS_START"})
//   axios.get("http://rest.learncode.academy/api/wstern/users")
//     .then((response)=>{
//       dispatch({type: "RECIEVE_USERS", payload: response.data})
//     })
//     .catch((err)=>{
//       dispatch({type: "FETCH_USERS_ERROR", payload: err})
//     })
//
// })
