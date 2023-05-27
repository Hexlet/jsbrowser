import React from 'react';

const IframeTemplate = ({
  // tabData,
  link,
}) => (
  <iframe
    // srcDoc={tabData}
    src={link}
    title="to be titled"
    width="100%"
    height="100%"
  />

);

export default IframeTemplate;
