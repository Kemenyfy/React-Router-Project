import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <header className="App-header">
                <ul>
                    <li><Link to="/">Category List</Link></li>
                    <li><Link to="/page1">Photo List</Link></li>
                    <li><Link to="/page2">Photo Detail</Link></li>
                </ul>
            </header>
        );
    }
}

export default Nav;