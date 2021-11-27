import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import UserHomeCourses from './Components/User/UserHomeCourses';
import UserCoursePage from './Components/User/UserCoursePage';
import SignupPage from './Components/SignupPage';
import HomePage from './Components/HomePage';
import FooterPage from './Components/FooterPage';
import TaskPage from './Components/User/TaskPage';
import AdminDashboard from './Components/Admin/AdminDashboard';
import AddCourse from './Components/Admin/AddCourse';
import AddTask from './Components/Admin/AddTask';
import EditCourse from './Components/Admin/EditCourse';

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
          <Route path="/admin" exact component={AdminDashboard}/>
          <Route path="/addCourse" exact component={AddCourse}/>
          <Route path="/addTask" exact component={AddTask}/>
          <Route path="/editCourse" exact component={EditCourse}/>

        </Switch>

        <FooterPage />
      </Router>
    );
  }
}

export default App;
