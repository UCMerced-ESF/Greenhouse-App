import React, { useState, useEffect, useCallback } from "react";

const FarmFormData = () => {
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fetchToken = async (e) => {
    e.preventDefault();
    setError(null);
    const url = 'https://ucmerced.terrantic.net/api/auth/jwt/login';
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
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.text();
      setAuthToken(data);
      setIsAuthenticated(true);
      console.log("Auth successful:", data);
    } catch (error) {
      setError(error);
      console.error("Error fetching token:", error);
    }
  };

  const fetchFormData = useCallback(async () => {
    if (!authToken) return;
    setError(null);
    const url = 'https://ucmerced.terrantic.net/api/datasets/table/query/select?query=select+*+from+postgresql%28pg_data%2C+table%3D%22tabGreen+House+Space+Request%22%2C+schema%3D%22forms%22%29';
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: authToken,
      },
      body: JSON.stringify({}), // Adjust this line if body should not be undefined
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(response.status);
      }
      const jsonData = await response.json();
      setFormData(jsonData);
      console.log("Form data fetched:", jsonData);
    } catch (fetchError) {
      setError(fetchError);
      console.error("Error fetching form data:", fetchError);
    }
  }, [authToken]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchFormData();
    }
  }, [isAuthenticated, fetchFormData]);

  const handleLogout = () => {
    setAuthToken(null);
    setIsAuthenticated(false);
    setFormData(null);
    setUsername('');
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={fetchToken}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }

  return (
    <div>
      <h2>Form Data</h2>
      {error && <p style={{ color: "red" }}>{error.message}</p>}
      {formData ? (
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      ) : (
        <p>Loading form data...</p>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default FarmFormData;
