import React from 'react';

const Nav = () => {
    return (
        <nav style={navbarStyle}>
            <a style={activeLinkStyle} href="#">UC Merced Greenhouse</a>
            <a style={linkStyle} href="#">Request Space!</a>
            <div style={adminButtonStyle}>
                <a style={linkStyle}>Admin Login</a>
            </div>
        </nav>
    );
}

// Define styles
const navbarStyle = {
    backgroundColor: 'white',
    overflow: 'hidden',
};

const activeLinkStyle = {
    float: 'left',
    display: 'block',
    color: 'black',
    textAlign: 'center',
    padding: '14px 20px',
    textDecoration: 'none',
    backgroundColor: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
};

const linkStyle = {
    float: 'left',
    display: 'block',
    color: 'black',
    textAlign: 'center',
    padding: '14px 20px',
    textDecoration: 'none',
};

const adminButtonStyle = {
    float: 'left',
};

export default Nav;
