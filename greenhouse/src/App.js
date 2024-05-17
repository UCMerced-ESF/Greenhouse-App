import React from 'react';
import Nav from './components/nav';
import Status from './components/status';
import ProfileDropdown from './components/profileDropdown';

const App = () => {
    return (
        <div>
            <Nav />
            {/* Use ProfileDropdown component here */}
            {/* <ProfileDropdown /> */}
            <Status />
        </div>
    );
}

export default App;
