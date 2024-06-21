import React, { useState, useEffect } from "react";

const ApiAuth = () => {
  const [authData, setAuthData] = useState(null);
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    const fetchData = async (e) => {
      const url = '/api/auth/jwt/login';
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json'
        },
        body: new URLSearchParams({
          grant_type: '',
          username: username,
          password: password,
          scope: '',
          client_id: '',
          client_secret: ''
        })
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        setAuthData(data);
        console.log(authData);
      } catch (error) {
      }
    };
    fetchData();
  }, []);

  return (
      <form>
        <input action="setPassword"></input>
        <input action="setUsername"></input>
        <button type="submit"></button>
      </form>
  );
};

export default ApiAuth;
