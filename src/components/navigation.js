import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav className='main-nav'>
            <Link to="/">Home</Link>
            <Link to="/fish">Fish</Link>
            <Link to="/bugs">Bugs</Link>
            <Link to="/sea">Sea Creatures</Link>
        </nav>
    );
}