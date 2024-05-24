import React from 'react';

const Status = () => {
    return (
        <div style={containerStyle}>
            <img style={imageStyle} src="greenhouse.jpg" alt="Greenhouse" />
        </div>
    );
}

// Define styles
const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '600px',
};

const imageStyle = {
    width: '75%',
    height: '100%',
};
export default Status;