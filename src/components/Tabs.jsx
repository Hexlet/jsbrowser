import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Nav, Button, OverlayTrigger, Tooltip,
} from 'react-bootstrap';
import uniqueId from 'lodash/uniqueId';
import { addTab, switchTab } from '../slices/tabs';

import TabItem from './TabItem.jsx';

const Tabs = () => {
  const tabsList = useSelector((state) => Object.values(state.tabs.tabsList));
  const dispatch = useDispatch();

  const addNewTab = () => {
    const newId = uniqueId();
    dispatch(addTab({ id: newId, name: 'New Tab' }));
    dispatch(switchTab(newId));
  };

  return (
    <Nav variant="tabs">
      {tabsList.map(({ id, name }) => (
        <TabItem key={id} id={id} name={name} />
      ))}
      <OverlayTrigger key="right" placement="right" overlay={<Tooltip>New Tab</Tooltip>}>
        <Button variant="light" onClick={addNewTab}>+</Button>
      </OverlayTrigger>
    </Nav>
  );
};

export default Tabs;
