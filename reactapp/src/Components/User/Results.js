import React, { Component, Fragment } from 'react'
import { MDBTypography } from 'mdbreact';
import UserNavbar from './UserNavbar';
import { MDBContainer } from 'mdbreact';


class Results extends Component {
    render() {
        return (
            
            <MDBContainer>
                <div>
                    <UserNavbar />

                    <div class="p-5 text-center bg-light">
                        <h1 class="mb-3">RHCSA</h1>
                        <h4 class="mb-3">Configure Networks</h4>
                    </div>

                    <table class="table table-bordered center">
                        <thead>

                            <tr>
                                <th scope="col">Tasks</th>
                                <th scope="col">Ratings</th>
                            </tr>

                        </thead>

                        <tbody>
                            <tr>
                                <th scope="row">Task - 1</th>
                                <td>Cell</td>
                            </tr>

                            <tr class="table-primary">
                                <th scope="row">Task - 2</th>
                                <td>Cell</td>
                            </tr>
                            <tr class="table-secondary">
                                <th scope="row">Task - 3</th>
                                <td>Cell</td>
                            </tr>
                            <tr class="table-success">
                                <th scope="row">Task - 4</th>
                                <td>Cell</td>
                            </tr>

                        </tbody>
                    </table>
                    <p align="right">
                    <a class="btn btn-primary" href="" role="button">Retry</a>
                    <a class="btn btn-primary" href="" role="button">Next</a>
                    </p>
                </div>
            </MDBContainer>

        )
    }

}


export default Results;