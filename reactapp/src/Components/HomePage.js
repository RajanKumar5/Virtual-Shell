import React, { Component } from 'react';
import NavbarPage from './NavbarPage';

class HomePage extends Component {
    render() {
        return (
            <div>
                <NavbarPage/>
                <h1>This is homepage</h1>
            </div>
        );
    }
}

export default HomePage;