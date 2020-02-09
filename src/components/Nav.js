import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                <nav>
                    <ul className='nav-links'>
                    <li>Home</li>
                    <li>About</li>
                    <li>User</li>
                    <li>Contact</li>
                    </ul>
                </nav>
            </div>
        )
    }
}
