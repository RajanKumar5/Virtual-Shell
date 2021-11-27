import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import UserHomeCourses from './Components/User/UserHomeCourses';
import UserCoursePage from './Components/User/UserCoursePage';
import SignupPage from './Components/SignupPage';
import HomePage from './Components/HomePage';
import FooterPage from './Components/FooterPage';
import TaskPage from './Components/User/TaskPage';
import Results from './Components/User/Results';
import ChangePassword from './Components/Admin/ChangePassword';

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
          <Route path="/task-page" exact component={TaskPage} />
          <Route path="/results" exact component={Results} />
          <Route path="/changepass" exact component={ChangePassword} />

        </Switch>

        <FooterPage />
      </Router>
    );
  }
}

export default App;
