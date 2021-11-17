import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import UserHomeCourses from './Components/User/UserHomeCourses';
import UserCoursePage from './Components/User/UserCoursePage';
import SignupPage from './Components/SignupPage';
import HomePage from './Components/HomePage';
import FooterPage from './Components/FooterPage';

class App extends Component {
  render() {
    return (
      <Router>

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={SignupPage} />
          <Route path="/userhomecourses" exact component={UserHomeCourses} />
          <Route path="/usercoursepage" exact component={UserCoursePage} />
        </Switch>

        <FooterPage />
      </Router>
    );
  }
}

export default App;
