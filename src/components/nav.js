import React from 'react';
import { ReactComponent as Logo } from './ucm_logo.svg';  // Adjust the path if the SVG is in a different directory
const Nav = ({ onNavigationClick }) => {
    return (
           

             <nav id="top" style={navbarStyle}>
                <a href="#top" style={ucmLogo}>
                        <Logo/>
                    </a>                

                    <a style={linkStyle} onClick={() => onNavigationClick('status')} href="#top">Status</a>
                    <a style={linkStyle} onClick={() => onNavigationClick('requestForm')} href="#top">Request Form</a>
            </nav>
    
    );
}

// Define styles
const navbarStyle = {
    justifycontents: 'center',
    backgroundColor: '#003262',
    height: '80px',  // Set the desired height of the navbar
    padding: '0 20px',  // Add padding if needed
};

const ucmLogo = {
    width: '50px',  // Adjust the width to make the logo smaller
    height: 'auto', // Keep the aspect ratio
    marginRight: '20px',  // Add some space after the logo
};

const linkStyle = {
    color: 'white',  // Change color to white for better visibility
    padding: '15px 20px',
    textDecoration: 'none',
    fontSize: '18px',  // Example font size
};

export default Nav;
