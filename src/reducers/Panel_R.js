//may be unnessasary


export default function reducer(state={
  hidden: false;
}, action){
  switch (action.type){
    case "HIDE_PANEL": {
      return {...state, hidden: true}
    }
    case "SHOW_PANEL": {
      return {...state, hidden: false}
    }

  }
}
