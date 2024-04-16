import React, { useState } from 'react';

function AdminHome() {
  const [dropdownActive, setDropdownActive] = useState(false);

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  return (
    <div>
      <nav style={{ backgroundColor: 'white', overflow: 'hidden' }}>
        <a style={{ float: 'left', display: 'block', color: 'black', textAlign: 'center', padding: '14px 20px', textDecoration: 'none' }} href="#">UC Merced Greenhouse</a>
        <a style={{ float: 'left', display: 'block', color: 'black', textAlign: 'center', padding: '14px 20px', textDecoration: 'none' }} href="#">Requests</a>
        <div className="profile-dropdown" style={{ float: 'right', position: 'relative' }}>
          <img src="profile_picture.jpg" alt="Profile" className="profile-image" style={{ width: '40px', height: '40px', borderRadius: '50%', marginTop: '8px', marginRight: '15px' }} />
          <div className={`profile-dropdown-content ${dropdownActive ? 'dropdown-active' : ''}`} style={{ display: 'none', position: 'absolute', backgroundColor: '#f9f9f9', minWidth: '160px', boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)', zIndex: '1', top: '60px', right: '0' }}>
            <a href="#" style={{ color: 'black', padding: '12px 16px', textDecoration: 'none', display: 'block' }}>Log out</a>
          </div>
          <div className="arrow-down" onClick={toggleDropdown} style={{ position: 'absolute', top: '50%', right: '5px', transform: 'translateY(-50%) rotate(45deg)', border: 'solid black', borderWidth: '0 3px 3px 0', display: 'inline-block', padding: '3px', cursor: 'pointer' }}></div>
        </div>
      </nav>

      <div className="statusContainer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '600px' }}>
        <img src="greenhouse.jpg" alt="Greenhouse" className="greenhouse-image" style={{ width: '75%', height: '100%' }} />
      </div>
    </div>
  );
}

export default AdminHome;
