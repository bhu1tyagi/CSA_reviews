import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="container">
            <Link style={linkStyle} to="/">Home</Link>
            <Link style={linkStyle} to="/career-guidance">Career</Link>
            <Link style={linkStyle} to="/competitions">Competitions</Link>
            <Link style={linkStyle} to="/higher-studies">HigherStudies</Link>
            <Link style={linkStyle} to="/post-placement-life">PlacementLife</Link>
            <Link style={linkStyle} to="/news">News</Link>
            <Link style={linkStyle} to="/about">About</Link>
        </div>
    )
}

const linkStyle = {color:'white',textDecoration:'none'}

export default Header
