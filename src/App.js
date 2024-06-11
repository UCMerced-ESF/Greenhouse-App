import React, { useState } from "react";
import Nav from "./components/nav";
import Status from "./components/Status";
// import ProfileDropdown from './components/profileDropdown';
import RequestForm from "./components/RequestForm";
import ApiTest from "./components/apiTest";

const App = () => {
  //handles dom
  const [currentComponent, setCurrentComponent] = useState("status"); // Initial component to display

  // Function to handle navigation link clicks
  const handleNavigationClick = (componentName) => {
    setCurrentComponent(componentName);
  };
  return (
    <div>
      <Nav onNavigationClick={handleNavigationClick} />
      {/* Use ProfileDropdown component here */}
      {/* <ProfileDropdown /> */}

      {currentComponent === "status" && <Status />}
      {currentComponent === "requestForm" && <RequestForm />}
      {currentComponent === "apiTest" && <ApiTest />}
    </div>
  );
};

export default App;
