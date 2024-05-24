import React, { useState } from 'react';

const ProfileDropdown = () => {
    const [dropdownActive, setDropdownActive] = useState(false);

    // Function to toggle dropdown
    const toggleDropdown = () => {
        setDropdownActive(!dropdownActive);
    };

    return (
        <div style={dropdownContainerStyle}>
            <img style={profileImageStyle} src="profile_picture.jpg" alt="propic" />
            <div style={dropdownContentStyle} className={dropdownActive ? 'dropdown-active' : ''}>
                <a style={dropdownLinkStyle} href="#">Log out</a>
            </div>
            <div style={arrowStyle} onClick={toggleDropdown}></div>
        </div>
    );
}

// Define styles
const dropdownContainerStyle = {
    float: 'right',
    position: 'relative',
};

const profileImageStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginTop: '8px',
    marginRight: '15px',
};

const dropdownContentStyle = {
    display: 'none',
    position: 'absolute',
    backgroundColor: '#f9f9f9',
    minWidth: '160px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: '1',
    top: '60px',
    right: '0',
};

const dropdownLinkStyle = {
    color: 'black',
    padding: '12px 16px',
    textDecoration: 'none',
    display: 'block',
};

const arrowStyle = {
    position: 'absolute',
    top: '50%',
    right: '5px',
    transform: 'translateY(-50%) rotate(45deg)',
    border: 'solid black',
    borderWidth: '0 3px 3px 0',
    display: 'inline-block',
    padding: '3px',
    cursor: 'pointer',
};

export default ProfileDropdown;
