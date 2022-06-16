import React from "react";
import LeafIcon from "../images/leaf.png";
import Navigation from "./navigation";
import MobileNav from './mobilenav';

export default function Header() {
    return (
        <div className="header">
            <div className="header__flexbox">
                <div className="header__flexbox__icon">
                    <img src={LeafIcon} alt="leaf" />
                </div>
                <div className="header__flexbox__nav">
                    <Navigation />
                    <MobileNav />
                </div>
            </div>
        </div>
    );
}