import React, { Component } from 'react';
import './App.css';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import MenuBar from './components/MenuBar';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import AddStudent from './Containers/AddStudent.js';
import ViewStudents from './Containers/ViewStudent';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({ basename: 'demo-app'});

class App extends Component {
  render() {
    // const { classes } = this.props;
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/add-student" component={AddStudent} />
            <Route exact path="/view-students" component={ViewStudents} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
          </div>
        </Router>
      </div>
    );
  }
}

export default (App);