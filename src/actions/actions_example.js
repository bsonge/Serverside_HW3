//import this file like this:
//    import * as user from "/path/actions_example"
//or like this
//    import {setusername} from "/path/actions_example"
// then you can call it like this:
//    user.setusername
// or if you did the second option, just use the funciton

export function fetchuser(){
  return(
    type: "FETCH_USER_FUFILLED",
    payload: {
      name: "WILL",
      age: 35,
    }
  )
}

export function setusername(name){
  return(
    type: "SET_USER_NAME",
    payload: name,
  )
}
