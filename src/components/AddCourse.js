import React from "react";

import {connect} from "react-redux"




class AddCourse extends React.Component{
  // super(props){
  //   this.c = Courses.courses[0];
  // }

  render(props){
    return(
      <div>
        <div>course: {console.log(this.c)}</div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return{
    // add in variables
    //example:
    // todo: state.todos[0];
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    // add in functions
    // example:
    // destroyTodo: ()=> dispatch({
    //   type: 'DESTROY_TODO'
    // })
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCourse)
