import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <nav className='nav-link'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                
                
                </ul>
            </nav>
        )
    }
}
