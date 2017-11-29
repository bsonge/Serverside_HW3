import {applyMiddleware, createStore} from "redux";


const reducer = (initialstate=0, action)=>{
  if (action.type === "INC"){
    return initialstate + 1;
  }
  else if (action.type === "DEC"){
    return initialstate - 1;
  }
  else if (action.type === "E"){
    throw new Error("AAAH!");
  }
  return initialState;
}

const logger = (store) => (next) => (action) =>{
  console.log("action fired", action);
  //action.type = "DEC" //can change action type as well
  next(action);
}
const error = (store) => (next) => (action) =>{
  try{
    next(action);
  }catch(e){
    console.log("SOMETHING BROKE")
  }
}

const middleware = applyMiddleware(logger, action);

const store = createStore(reducer, 1, middleware) // later move 1 to reducer



store.subscribe(()=>{
  console.log("store changed", store.getState());
})

store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
