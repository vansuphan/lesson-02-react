import React, { Component } from 'react';
//mport logo from './logo.svg';
import './App.css';
// import { Button } from 'reactstrap';
import Header from './components/header/index';
import Body from './components/body/index';
import Footer from './components/footer/index';
import TodoItem from './components/todo/index';
import TrafficLight from './components/tranfficlight/index';
import{
  BrowserRouter as Router,
  Route} from "react-router-dom";

class App extends Component {
  render(){
    return(
      <div className="App">
        <Router>
          {/* <Header></Header> */}
          <Route path="/tranfficLight">
            <TrafficLight></TrafficLight>
          </Route>
          <Route path="/" exact>
            <Header></Header>
            <Footer></Footer>
          </Route>
          <Route path="/body">
            <Body></Body>
          </Route>
          <Route path="/todos">
            <TodoItem></TodoItem>
          </Route>
          {/* <Footer></Footer> */}
        </Router>
      </div>
    );
  }
}

export default App;
