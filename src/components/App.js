import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import {connect} from "react-redux"

import '../index.css';
import Home from "./Home";
import AddCourse from "./AddCourse";
import AddHomework from "./AddHomework";
import SubmitHomework from "./SubmitHomework";
import PendingHomework from "./PendingHomework";


class App extends Component {
  render() {
      // const {todos, actions} = this.props;
      return (
            <HashRouter>
            <div className="App">
              <header className="App-header">
                <h1 className="App-title"><NavLink to="/">Homework Butler</NavLink></h1>
                <div className="App-navbar">
                  <ul>
                    <li><NavLink to="/AddCourse" >Add Course</NavLink></li>
                    <li><NavLink to="/AddHomework" >Add Homework</NavLink></li>
                    <li><NavLink to="/SubmitHomework" >Submitted Homework</NavLink></li>
                    <li><NavLink to="/PendingHomework" >Pending Homework</NavLink></li>
                  </ul>
                </div>
              </header>
              <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/AddCourse" component={AddCourse}/>
                <Route path="/AddHomework" component={AddHomework}/>
                <Route path="/SubmitHomework" component={SubmitHomework}/>
                <Route path="/PendingHomework" component={PendingHomework}/>
              </div>
            </div>
          </HashRouter>
      );
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
)(App)
