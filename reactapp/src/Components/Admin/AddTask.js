import React, { Component } from 'react';
import AdminNav from './AdminNav';

class AddTask extends Component {
    render() {
        return (
            <div>
                <AdminNav history={this.props.history} />
            </div>
        );
    }
}

export default AddTask;