import React, { useState, useEffect } from "react";

const GreenHouseSpaceRequest = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "/api/datasets/table/query/select?query=select+*+from+postgresql%28pg_data%2C+table%3D%22tabGreen+House+Space+Request%22%2C+schema%3D%22forms%22%29";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "",
        },
        body: undefined,
      };

      try {
        const response = await fetch(url, options);
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          const text = await response.text();
          console.error("Expected JSON, got:", text);
          setError(new Error("Received non-JSON response"));
        }
      } catch (fetchError) {
        setError(fetchError);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {error ? (
        <p style={{ color: "red" }}>{error.message}</p>
      ) : (
        <pre>{data ? JSON.stringify(data, null, 2) : "Loading..."}</pre>
      )}
    </div>
  );
};

export default GreenHouseSpaceRequest;
