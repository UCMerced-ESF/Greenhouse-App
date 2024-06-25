import React, { useState, useEffect } from "react";

const ApiAuth = () => {
  const [authToken, setauthToken] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      const url = '/api/auth/jwt/login';
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json'
        },
        body: new URLSearchParams({
          grant_type: '',
          username: '',
          password: '',
          scope: '',
          client_id: '',
          client_secret: ''
        })
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        setauthToken(data);
        console.log(authToken);
      } catch (error) {
      }
    };
    fetchToken();
  }, []);

  return (
    <div>
  <p1>test</p1>
    </div>
  );
};

export default ApiAuth;
