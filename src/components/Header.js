import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="container">
            <div className="link"><Link className="link"  to="/">Home</Link></div>
            <Link className="link"  to="/career-guidance">Career</Link>
            <Link className="link"  to="/competitions">Competitions</Link>
            <Link className="link"  to="/higher-studies">HigherStudies</Link>
            <Link className="link"  to="/post-placement-life">PlacementLife</Link>
            <Link className="link"  to="/news">News</Link>
            <Link className="link"  to="/about">About</Link>
        </div>
    )
}

export default Header
