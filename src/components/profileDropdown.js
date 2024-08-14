import React, { useState } from 'react';

const DropdownForm = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [dropdownActive, setDropdownActive] = useState(false);

    const options = ['Option 1', 'Option 2', 'Option 3']; // Add more options as needed
    const apiUrl = 'https://ucmerced.terrantic.net/f/Green%20House%20Space%20Request';

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setDropdownActive(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted with:', selectedOption);
    };

    return (
        <div style={containerStyle}>
            <h2>Request Form</h2>
            <iframe
                title="Request Form"
                width="100%"
                height="500px"
                src={apiUrl}
            ></iframe>
            <form onSubmit={handleSubmit}>
                <div style={dropdownContainerStyle} onClick={() => setDropdownActive(!dropdownActive)}>
                    <div style={dropdownToggleStyle}>{selectedOption || 'Select an option'}</div>
                    {dropdownActive && (
                        <div style={dropdownContentStyle}>
                            {options.map((option, index) => (
                                <div
                                    key={index}
                                    style={dropdownItemStyle}
                                    onClick={() => handleOptionClick(option)}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <button type="submit" style={submitButtonStyle}>Submit</button>
            </form>
        </div>
    );
}

// Define styles
const containerStyle = {
    padding: '20px',
};

const dropdownContainerStyle = {
    position: 'relative',
    display: 'inline-block',
    width: '200px',
    marginBottom: '10px',
};

const dropdownToggleStyle = {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer',
};

const dropdownContentStyle = {
    position: 'absolute',
    backgroundColor: '#f9f9f9',
    minWidth: '100%',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1,
};

const dropdownItemStyle = {
    padding: '10px',
    cursor: 'pointer',
    borderBottom: '1px solid #ddd',
};

const submitButtonStyle = {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};

export default DropdownForm;
