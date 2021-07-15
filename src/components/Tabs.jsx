import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Nav, Button } from 'react-bootstrap';
import _ from 'lodash';
import { addTab, switchTab } from '../slices/tabs';

import TabItem from './TabItem.jsx';

const Tabs = () => {
  const tabsList = useSelector((state) => Object.values(state.tabs.tabsList));
  const currentTabId = useSelector((state) => state.tabs.currentTabId);
  const dispatch = useDispatch();
  console.log(currentTabId);

  const addNewTab = () => {
    const newId = _.uniqueId();
    dispatch(addTab({ id: newId, name: 'New Tab' }));
    dispatch(switchTab(newId));
  };

  return (
    <Nav variant="tabs">
      {tabsList.map(({ id, name }) => (
        <TabItem key={id} id={id} name={name} />
      ))}
      <Button variant="light" onClick={addNewTab}>+</Button>
    </Nav>
  );
};

export default Tabs;
