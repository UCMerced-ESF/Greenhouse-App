import React from 'react';

const Status = () => {
  return (
    <div>
      <h1>Current Greenhouse Status</h1>
      <iframe 
        src="https://merced-my.sharepoint.com/personal/ewaring_ucmerced_edu/_layouts/15/Doc.aspx?sourcedoc={2a8df419-b795-4af8-a72c-8ac6dff22508}&amp;action=embedview" 
        width="100%" 
        height="600px" 
        frameBorder="0" 
        title="Greenhouse Status">
        This is an embedded
        <a target="_blank" rel="noopener noreferrer" href="https://office.com">Microsoft Office</a>
        diagram, powered by 
        <a target="_blank" rel="noopener noreferrer" href="https://office.com/webapps">Office</a>.
      </iframe>
    </div>
  );
}

export default Status;
