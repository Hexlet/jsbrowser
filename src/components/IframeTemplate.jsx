import React from 'react';

const IframeTemplate = ({
  link,
}) => (
  <iframe
    src={link}
    title="to be titled"
    width="100%"
    height="100%"
  />

);

export default IframeTemplate;
