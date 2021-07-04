import React from 'react';
import {
  Tab, Row, Nav, Button,
} from 'react-bootstrap';
import Search from './Search.jsx';

const TabsContainer = () => (
  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
    <Row sm={12}>
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link eventKey="first">Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Tab 2</Nav.Link>
        </Nav.Item>
        <Button variant="light">+</Button>
      </Nav>
    </Row>
    <Row sm="12">
      <Search />
    </Row>
    <Row sm={12}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          1
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          2
        </Tab.Pane>
      </Tab.Content>
    </Row>
  </Tab.Container>
);

export default TabsContainer;
