import {combineReducers, createStore} from "redux";

const userReducer = function(state={}, action){  //make its own file: usereducers
  case "CHANGE_NAME":{
    state = {...state, name: action.payload}; //immutable
    break;
  }
  case "CHANGE_AGE":{
    state = {...state, name: action.payload};
    break;
  }
  return state;
}

const tweetReducer = function(state=[], action){ //make its own file: tweeteducers
  //can change data based on action like above
  return state;
}

const reducers = combineReducers({  ///make its own file: store
  user: userReducer,
  tweets: tweetsReducer,
});

const store = createStore(reducers);  ///also in store file

store.subscribe(()=>{
  console.log("store changed", store.getState())
})

store.dispatch({type: "CHANGE_NAME", payload: "John"})
store.dispatch({type: "CHANGE_AGE", payload: 35})
