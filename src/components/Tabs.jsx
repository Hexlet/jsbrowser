import React from 'react';
import { useSelector } from 'react-redux';
import { Nav, Button } from 'react-bootstrap';

import TabItem from './TabItem.jsx';

const Tabs = () => {
  const tabs = useSelector((state) => Object.values(state.tabs.tabs));
  // const dispatch = useDispatch();
  console.log(tabs);
  return (
    <Nav variant="tabs">
      <TabItem />
      <Button variant="light">+</Button>
    </Nav>
  );
};

export default Tabs;
