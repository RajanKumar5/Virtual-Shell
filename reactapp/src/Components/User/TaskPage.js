import { MDBTypography } from 'mdbreact';
import React, { Component } from 'react';
import SplitPane, { Pane } from "react-split-pane";
import './TaskPage.css';
import UserNavbar from './UserNavbar';
import axios from 'axios';

class TaskPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: localStorage.getItem("email"),
            courseId: "",
            courseName: "",
            courseDescription: "",
            courseURL: "",
            bookURL: "",
            terminalURL: ""
        };
    }

    componentDidMount() {
        const courseId = +this.props.match.params.courseId;
        if (courseId) {
            axios.get("http://localhost:8080/courses/" + courseId)
                .then(response => {
                    this.setState({
                        courseId: response.data.courseId,
                        courseName: response.data.courseName,
                        courseDescription: response.data.courseDescription,
                        courseURL: response.data.courseURL,
                        bookURL: response.data.bookURL,
                        terminalURL: response.data.terminalURL
                    });
                });
        }
    }

    render() {

        if (this.state.email === null) {
            this.props.history.push("/login");
        }

        return (
            <div>
                <UserNavbar history={this.props.history} />
                <div className="mt-2">
                    <SplitPane defaultSize="30%" split="vertical">
                        <Pane initialSize="200px">

                            {/* Book URL */}
                            <object className="container" height="600px" width="100%" data={this.state.bookURL} type="application/pdf">   </object>

                        </Pane>
                        <div className="ml-3 mr-3">

                            {/* Terminal URL */}
                            <iframe src={this.state.terminalURL} width="100%" height="600px"></iframe>
                        </div>

                    </SplitPane>
                </div>
            </div>
        );
    }
}

export default TaskPage;
