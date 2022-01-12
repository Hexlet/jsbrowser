import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Nav, Button } from 'react-bootstrap';

import * as selectors from '../selectors';
import { actions as tabActions } from '../slices/tabs';

const TabItem = ({ id, name }) => {
  const activeTabId = useSelector(selectors.activeTabIdSelector);
  const dispatch = useDispatch();
  const isActive = id === activeTabId;

  const handleSwitchToTab = () => {
    dispatch(tabActions.switchToTab({ id }));
  };

  const handleTabClosing = () => {
    dispatch(tabActions.closeTab({ id }));
  };

  return (
    <Nav.Item>
      <Nav.Link onClick={handleSwitchToTab} className="text-dark" active={isActive}>{name}</Nav.Link>
      <Button onClick={handleTabClosing} className="tab-closing-button">
        <span className="visually-hidden">Close tab</span>
      </Button>
    </Nav.Item>
  );
};

export default TabItem;
