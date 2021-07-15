import React from 'react';
import { Nav } from 'react-bootstrap';

const TabItem = ({ name }) => (
  <Nav.Item>
    <Nav.Link className="text-dark" eventKey="first">{name}</Nav.Link>
  </Nav.Item>
);

export default TabItem;
