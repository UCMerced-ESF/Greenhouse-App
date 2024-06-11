import React, { useState, useEffect } from "react";

const ApiTest = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const url = "/api/ping";
    const options = { method: "GET", headers: { Accept: "application/json" } };

    fetch(url, options)
      .then((response) => response.text())
      .then((htmlString) => {
        // Parse the HTML string into a document object
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, "text/html");
        // Extract the body content
        const bodyContent = doc.body.innerHTML;
        setData(bodyContent);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {data && (
        <div
          style={{
            transform: "scale(1.5)",
            transformOrigin: "0 0",
          }}
          dangerouslySetInnerHTML={{ __html: data }}
        />
      )}
    </div>
  );
};

export default ApiTest;
