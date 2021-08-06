import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
    // get initial data 
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
        // to prevent the autoreload
        e.preventDefault(); 
        // get data as object
        const obj = {
            username: this.state.username,
            password: this.state.password
        };
        // passing data from the frontend to backend using axios
        axios.post('http://localhost/Omobio-Test/Trainee-Associate-Assignment/bizlogic/Index.php', obj)
        .then(()=>{
            this.setState({ redirect: true}); // when get the right username and the password redirect state to true to redirect to the home
        }).catch(()=>{
            alert("Incorrect Username Or password"); // get window aleat when we enter an wrong password
            this.setState({redirect: false});

        });
        
    }

    render() {
        // from here we check the redirect state is true then we can render redirect to the home 
        if(this.state.redirect){
            return (<Redirect to={'/home'} />)
        }
        // this is the ui creation of the login
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
