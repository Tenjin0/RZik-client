import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Home extends Component {

    
    render() {
        return (
            <div>
              Home 
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/admin'>Admin</Link></li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/playlist'>Playlist</Link></li>
                <li><Link to='/uploads'>My uploads</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/language'>Language</Link></li>
            </ul>
            </div>
        );
    }
}

export default Home;
