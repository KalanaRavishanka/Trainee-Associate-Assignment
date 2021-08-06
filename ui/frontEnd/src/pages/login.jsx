import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            redirect: false 
        };
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    // function that get data from the input fields
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    // function when click the login button
    login(e) {
        e.preventDefault();
        const obj = {
            username: this.state.username,
            password: this.state.password
        };

        axios.post('http://localhost/Omobio-Test/Trainee-Associate-Assignment/bizlogic/Index.php', obj)
        .then(()=>{
            this.setState({ redirect: true});
        }).catch(()=>{
            alert("Incorrect Username Or password");
            this.setState({redirect: false});

        });
        
    }

    render() {
        if(this.state.redirect){
            return (<Redirect to={'/home'} />)
        }
        return (
            <div>
                <div className="login">
                    <form className="form" onSubmit={this.login}>
                        <div className="mb-3">
                            <label className="form-label">User Name</label>
                            <input type="text" className="form-control" name="username" onChange={this.onChange} />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" onChange={this.onChange} />
                        </div>

                        <input type="submit" className="btn btn-primary" value="Login" />
                    </form>
                </div>
            </div>
        )
    }
}
