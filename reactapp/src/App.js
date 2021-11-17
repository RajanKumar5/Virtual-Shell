import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavbarPage from './Components/NavbarPage';
import LoginPage from './Components/LoginPage';
import FooterPage from './Components/FooterPage';
import SignupPage from './Components/SignupPage';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <NavbarPage/>
          {/* <LoginPage/> */}
          <FooterPage/>
          <SignupPage/>
        </div>
      </Router>
    );
  }
}

export default App;
