import React from 'react';

const Nav = ({ onNavigationClick }) => {
    return (
           

             <nav id="top" style={navbarStyle}>
                    <a style={activeLinkStyle} href="#top">UC Merced Greenhouse</a>

                    <a  style={linkStyle} onClick={() => onNavigationClick('status')} href="#top">Status</a>
                    <a style={linkStyle} onClick={() => onNavigationClick('requestForm')} href="#top">Request Form</a>
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



export default Nav;
