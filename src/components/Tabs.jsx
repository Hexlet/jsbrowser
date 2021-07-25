import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Nav, Button, OverlayTrigger, Tooltip,
} from 'react-bootstrap';
import { actions as tabActions } from '../slices/tabs';

import TabItem from './TabItem.jsx';

const Tabs = () => {
  const tabsList = useSelector((state) => state.tabs.tabsList);
  const dispatch = useDispatch();

  const handleAddNewTab = () => {
    dispatch(tabActions.addNewTab());
  };

  return (
    <Nav variant="tabs">
      {tabsList.map(({ id, name }) => (
        <TabItem key={id} id={id} name={name} />
      ))}
      <OverlayTrigger key="right" placement="right" overlay={<Tooltip>New Tab</Tooltip>}>
        <Button variant="light" onClick={handleAddNewTab}>+</Button>
      </OverlayTrigger>
    </Nav>
  );
};

export default Tabs;
