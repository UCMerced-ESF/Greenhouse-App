import React from 'react';

const RequestForm = () => {
    const apiUrl = 'https://ucmerced.terrantic.net/f/Green%20House%20Space%20Request';

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
