import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function MobileNav() {
    const [navShow, updateNavShow] = useState(false);

    function updateNavState() {
        updateNavShow(prev => !prev);
    }

    return (
        <div className="mobile-nav">
            <span className="mobile-nav__hamburger" onClick={updateNavState}>&#9776;</span>
            <nav className={ `mobile-nav__links ${navShow ? "mobile-nav__links--show" : "mobile-nav__links--hide"}` }>
                <Link to="/" onClick={updateNavState}>Home</Link>
                <Link to="/fish" onClick={updateNavState}>Fish</Link>
                <Link to="/bugs" onClick={updateNavState}>Bugs</Link>
                <Link to="/sea" onClick={updateNavState}>Sea Creatures</Link>
            </nav>
        </div>
    );
}
