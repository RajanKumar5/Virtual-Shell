import { MDBTypography } from 'mdbreact';
import React, { Component } from 'react';
import SplitPane, { Pane } from "react-split-pane";
import './TaskPage.css';
import UserNavbar from './UserNavbar';

class TaskPage extends Component {
    render() {
        return (
            <div>
                <UserNavbar history={this.props.history} />
                <div className="mt-2">
                    <SplitPane defaultSize="30%" split="vertical">
                        <Pane initialSize="200px">
                            <MDBTypography className="ml-2 mr-2" note noteColor='warning' noteTitle='Note warning: '>
                                Please turn-off the instance if not in use.
                            </MDBTypography>

                            <MDBTypography className="ml-2 mr-2" note noteColor='secondary' noteTitle='Task-1: '>

                            </MDBTypography>

                            <dl className="row ml-2 mr-2">
                                <dt className="col-sm-3">Description</dt>
                                <dd className="col-sm-9">
                                    You should configure your physical server and three virtual machines as follows (where 'x' is your station number):  Networks:  Local network 192.168.4.0/22 (255.255.252.0), GW 192.168.4.1, DNS 192.168.7.254 Trusted subnet 192.168.5.0/24 (255.255.255.0) Untrusted subnet 192.168.4.0/24 (255.255.255.0) An installation tree has been made available to you at ftp://192.168.5.200/pub/rhel6 which can serve as the basis for a yum repository.
                                </dd>

                                <dt className="col-sm-3">Networks</dt>
                                <dd className="col-sm-9">
                                    Local network
                                    192.168.4.0/22 (255.255.252.0), GW 192.168.4.1, DNS 192.168.7.254
                                    Trusted subnet
                                    192.168.5.0/24 (255.255.255.0)
                                    Untrusted subnet
                                    192.168.4.0/24 (255.255.255.0)
                                    An installation tree has been made available to you at ftp://192.168.5.200/pub/rhel6 which can serve as the basis for a yum repository.
                                </dd>
                            </dl>
                        </Pane>
                        <div className="ml-3 mr-3">
                            <iframe src="http://18.222.159.5:8000/" width="100%" height="570px"></iframe>
                        </div>

                        <div className="terminal">
                            <iframe src="https://www.youtube.com/embed/cWDJoK8zw58%22%3E"></iframe>
                        </div>
                    </SplitPane>
                </div>
            </div>
        );
    }
}

export default TaskPage;
