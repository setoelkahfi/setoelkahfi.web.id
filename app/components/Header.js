import React from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
    color: '#fff',
    font: '11pt "Helvetica Neue", "Helvetica", Arial, sans-serif',
}

const listStyle = {
    display: 'inline',
    margin: 4
}

const Header = () => (
    <header>
        <nav>
            <ul>
                <li style={listStyle}><Link to='/' style={linkStyle}>Home</Link></li>
                <li style={listStyle}><Link to='/about' style={linkStyle}>About</Link></li>
                <li style={listStyle}><Link to='/cv' style={linkStyle}>CV</Link></li>
                <li style={listStyle}><Link to='/contact' style={linkStyle}>Contact</Link></li>
            </ul>
        </nav>
    </header>
);

export default Header;