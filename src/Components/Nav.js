import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <header className="App-header">
                <ul>
                    <li>
                        <Link to="/">Category List</Link>
                    </li>
                    <li>
                        <Link to="/page1">Go to Page 1</Link>
                    </li>
                    <li>
                        <Link to="/page2">Go to Page 2</Link>
                    </li>
                </ul>
            </header>
        );
    }
}

export default Nav;