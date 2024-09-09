import React from 'react';

const RequestForm = () => {
    const apiUrl = 'https://ucmerced.terrantic.net/f/Green%20House%20Space%20Request';

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>Request Form</h2>
        <iframe
          title="Request Form"
          width="100%"
          height="500px"
          src={apiUrl}
          style={{ border: '1px solid #ddd', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
        ></iframe>
      </div>
      
    );
}

export default RequestForm;
