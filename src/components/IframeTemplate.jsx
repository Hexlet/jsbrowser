import React from 'react';

const getHTMLTemplate = (tabData) => (
  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IFrame-${tabData.id}</title>
    <style>
      body { font-family: sans-serif; background-color: hsl(50, 40%, 95%); padding: 50px; }
      h1, h2 { text-align: center; font-weight: normal; }
      details { font-size: 1rem; }
      details summary { font-size: 1.2em; }
    </style>
  </head>
  <body>
    <h1>Tab name: ${tabData.name}</h1>
    <h2>Tab Id: ${tabData.id}</h2>
    <details>
      <summary>Tab metadata</summary>
      <pre>${JSON.stringify(tabData, null, 4)}</pre>
    </details>
  </body>
  </html>`
);

const IframeTemplate = ({ tabData }) => (
  <iframe srcDoc={getHTMLTemplate(tabData)} title={tabData.name} width="100%" height="100%" />
);

export default IframeTemplate;
