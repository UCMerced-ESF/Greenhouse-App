import React, { useState, useEffect } from "react";


const FarmFormData = () => {
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState(null);
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
          username: process.env.USERNAME,
          password: process.env.PASSWORD,
          scope: '',
          client_id: '',
          client_secret: ''
        })
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setauthToken(data);
        console.log(data);
      } catch (error) {
      }
    };

    fetchToken();
  }, []);

  useEffect(() => {
    const fetchFormData = async () => {
      const url =
        "/api/datasets/table/query/select?query=select+*+from+postgresql%28pg_data%2C+table%3D%22tabGreen+House+Space+Request%22%2C+schema%3D%22forms%22%29";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: authToken,
        },
        body: undefined,
      };

      try {
        const response = await fetch(url, options);
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const jsonData = await response.json();
          setFormData(jsonData);
          console.log(jsonData);
        } else {
          const text = await response.text();
          console.error("Expected JSON, got:", text);
          setError(new Error("Received non-JSON response"));
        }
      } catch (fetchError) {
        setError(fetchError);
      }
    };
    fetchFormData();
  }, [authToken]);

  return (
    <div>
      {error ? (
        <p style={{ color: "red" }}>{error.message}</p>
      ) : (
        <pre>{formData ? JSON.stringify(formData, null, 2) : "Loading..."}</pre>
      )}
    </div>
  );
};

export default FarmFormData;
