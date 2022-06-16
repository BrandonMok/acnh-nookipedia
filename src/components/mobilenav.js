import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';

export default function MobileNav() {
    const [navShow, updateNavShow] = useState(false);
    const nav = useRef();

    return (
        <div className="mobile-nav">
            <span className="mobile-nav__hamburger" onClick={() => updateNavShow(prev => !prev)}>&#9776;</span>
            <nav ref={nav} className={ `mobile-nav__links ${navShow ? "mobile-nav__links--show" : "mobile-nav__links--hide"}` }>
                <Link to="/">Home</Link>
                <Link to="/fish">Fish</Link>
                <Link to="/bugs">Bugs</Link>
                <Link to="/sea">Sea Creatures</Link>
            </nav>
        </div>
    );
}
