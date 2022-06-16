import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';

export default function MobileNav() {
    const [navShow, updateNavShow] = useState(false);
    const mobileNav = useRef();

    function showMobileNav() {
        updateNavShow(prev => !prev);
    }

    return (
        <div className="mobile-nav">
            <span className="mobile-nav__hamburger" onClick={showMobileNav}>&#9776;</span>

            <div ref={mobileNav} className="mobile-nav__container">
                <nav className="mobile-nav__container__links">
                    <Link to="/">Home</Link>
                </nav>
            </div>
        </div>
    );
}