import React from 'react'
import {Link} from 'react-router-dom';
import '../App.css';

export default function Welcome() {
    return (
        <div className="welcome">
            <h1>Omobio Test</h1>
            <Link to="/login"><button className="btn btn-success">Get In Touch</button></Link>
        </div>
    )
}