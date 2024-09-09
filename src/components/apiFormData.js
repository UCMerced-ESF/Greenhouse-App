import React, { useState, useEffect, useCallback } from "react";

const FarmFormData = () => {
  // const [formData, setFormData] = useState(null);
  const [error, setError] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const apiUrl = 'https://ucmerced.terrantic.net/f/Green%20House%20Space%20Request';

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
    const url = '/datasets/table/query/select?query=select+*+from+postgresql%28pg_data%2C+table%3D%22tabGreen+House+Space+Request%22%2C+schema%3D%22forms%22%29';
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
      // setFormData(jsonData);
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
    // setFormData(null);
    setUsername('');
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
    <h2 style={{ textAlign: 'center', color: '#333' }}>Login</h2>
    <form onSubmit={fetchToken}>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="username" style={{ display: 'block', marginBottom: '5px', fontSize: '14px', color: '#555' }}>Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '14px' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', fontSize: '14px', color: '#555' }}>Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '14px' }}
        />
      </div>
      <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#003262', color: '#fff', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer' }}>Login</button>
    </form>
    {error && <p style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>{error.message}</p>}
  </div>
    );
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
    <h2 style={{ textAlign: 'center', color: '#333' }}>Requests</h2>
    <iframe
      title="Requests"
      width="100%"
      height="500px"
      src={apiUrl}
      style={{ border: '1px solid #ddd', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
    ></iframe>
    <button 
      onClick={handleLogout} 
      style={{ display: 'block', width: '100%', marginTop: '20px', padding: '10px', backgroundColor: '#003262', color: '#fff', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer' }}
    >
      Logout
    </button>
  </div>
  );
};

export default FarmFormData;
