import React, { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function MobileNav() {
    const [navShow, updateNavShow] = useState(false);
    const nav = useRef();

    // not working...
    useEffect(() => {
        let percentWidth = navShow ? "45%" : "0";
        nav.current.style.width = percentWidth;
    }, [navShow]);

    return (
        <div className="mobile-nav">
            <span className="mobile-nav__hamburger" onClick={() => updateNavShow(prev => !prev)}>&#9776;</span>

            <div ref={nav} className="mobile-nav__container">
                <nav className="mobile-nav__container__links">
                    <Link to="/">Home</Link>
                    <Link to="/fish">Fish</Link>
                    <Link to="/bugs">Bugs</Link>
                    <Link to="/sea">Sea Creatures</Link>
                </nav>
            </div>
        </div>
    );
}