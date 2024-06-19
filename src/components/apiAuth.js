import React, { useState, useEffect } from "react";

const ApiAuth = () => {
  const [authData, setAuthData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = '/api/auth/jwt/login';
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json'
        },
        body: new URLSearchParams({
          grant_type: '',
          username: 'smanjrekar2@ucmerced.edu',
          password: 'ucm5730*',
          scope: '',
          client_id: '',
          client_secret: ''
        })
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json(); // Assuming the API returns JSON
        setAuthData(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error && <p>Error: {error.message}</p>}
      {authData ? <pre>{JSON.stringify(authData, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default ApiAuth;
