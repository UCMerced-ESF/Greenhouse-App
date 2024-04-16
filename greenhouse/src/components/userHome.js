import React, { useState } from 'react';

function UserHome() {
  const [dropdownActive, setDropdownActive] = useState(false);

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  return (
    <div>
      <nav style={{ backgroundColor: 'white', overflow: 'hidden' }}>
        <a style={{ float: 'left', display: 'block', color: 'black', textAlign: 'center', padding: '14px 20px', textDecoration: 'none' }} href="#">UC Merced Greenhouse</a>
        <a style={{ float: 'left', display: 'block', color: 'black', textAlign: 'center', padding: '14px 20px', textDecoration: 'none' }} href="#">Request Space!</a>
        <div className="profile-dropdown" style={{ float: 'right', position: 'relative' }}>
          <a href="adminLogin.html" style={{ float: 'left', display: 'block', color: 'black', textAlign: 'center', padding: '14px 20px', textDecoration: 'none' }} onClick={toggleDropdown}>Admin Login</a>
          <div className={`profile-dropdown-content ${dropdownActive ? 'dropdown-active' : ''}`} style={{ display: 'none', position: 'absolute', backgroundColor: '#f9f9f9', minWidth: '160px', boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)', zIndex: '1', top: '60px', right: '0' }}>
            {/* Dropdown content goes here */}
          </div>
        </div>
      </nav>

      <div className="statusContainer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '600px' }}>
        <img src="./src/greenhouse.jpg" alt="Greenhouse" className="greenhouse-image" style={{ width: '75%', height: '100%' }} />
      </div>
    </div>
  );
}

export default UserHome;
