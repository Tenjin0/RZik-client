import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Register extends Component {
    render() {
        return (
            <div>
              Home 
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
            </div>
        );
    }
}

export default Register;
