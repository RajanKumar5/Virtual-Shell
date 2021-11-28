import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import UserHomeCourses from './Components/User/UserHomeCourses';
import SignupPage from './Components/SignupPage';
import HomePage from './Components/HomePage';
import FooterPage from './Components/FooterPage';
import TaskPage from './Components/User/TaskPage';
import AdminDashboard from './Components/Admin/AdminDashboard';
import AddCourse from './Components/Admin/AddCourse';
import EditCourse from './Components/Admin/EditCourse';
import ManageCourses from './Components/Admin/ManageCourses';
import ManageUsers from './Components/Admin/ManageUsers';
import AddUser from './Components/Admin/AddUser';
import UpdateUser from './Components/Admin/UpdateUser';
import ChangePassword from './Components/Admin/ChangePassword';
import ChangeUserPassword from './Components/User/ChangeUserPassword';

class App extends Component {
  render() {
    return (
      <Router>

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={SignupPage} />
          <Route path="/userhomecourses" exact component={UserHomeCourses} />
          <Route path="/task-page/:courseId" exact component={TaskPage} />
          <Route path="/admin" exact component={AdminDashboard} />
          <Route path="/addCourse" exact component={AddCourse} />
          <Route path="/editCourse/:courseId" exact component={EditCourse} />
          <Route path="/manageCourses" exact component={ManageCourses} />
          <Route path="/manageUsers" exact component={ManageUsers}/>
          <Route path="/addUsers" exact component={AddUser}/>
          <Route path="/updateUser" exact component={UpdateUser}/>
          <Route path="/changePassword" exact component={ChangePassword}/>
          <Route path="/updatePassword" exact component={ChangeUserPassword}/>
        </Switch>
        <FooterPage />
      </Router>
    );
  }
}

export default App;
