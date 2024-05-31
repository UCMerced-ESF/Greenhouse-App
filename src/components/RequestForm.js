import React from 'react';

const RequestForm = () => {
//     // Define any form fields and state variables as needed
//     const [formData, setFormData] = useState({
//         // Example form fields
//         name: '',
//         email: '',
//         message: ''
//     });

    // Handle form field changes
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };
    const apiUrl = 'https://ucmerced.terrantic.net/f/Green%20House%20Space%20Request';

    // // Handle form submission
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Add code to handle form submission (e.g., send data to server)
    //     console.log('Form submitted:', formData);
    //     // Reset form fields after submission if needed
    //     setFormData({
    //         name: '',
    //         email: '',
    //         message: ''
    //     });
    // };

    return (
        <div>
            <h2>Request Form</h2>
            <iframe
            title="Request Form"
            width="100%"
            height="500px"
            src={apiUrl}
            ></iframe>
           
        </div>
    );
}

export default RequestForm;
