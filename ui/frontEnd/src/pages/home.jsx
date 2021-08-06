import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { users: [] };
    }

    componentDidMount() {
        axios.get('http://localhost/Omobio-Test/Trainee-Associate-Assignment/bizlogic/view.php')
            .then(response => {
                this.setState({ users: response.data });
                
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="home">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((result) => {
                            return (
                                <tr>
                                    <td>{result.id}</td>
                                    <td>{result.name}</td>
                                    <td>{result.username}</td>
                                    <td>{result.email}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }

}
