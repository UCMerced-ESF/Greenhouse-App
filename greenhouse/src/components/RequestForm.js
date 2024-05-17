import React, { useState } from 'react';

const RequestForm = () => {
    // Define any form fields and state variables as needed
    const [formData, setFormData] = useState({
        // Example form fields
        name: '',
        email: '',
        message: ''
    });

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add code to handle form submission (e.g., send data to server)
        console.log('Form submitted:', formData);
        // Reset form fields after submission if needed
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div>
            <h2>Request Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default RequestForm;
