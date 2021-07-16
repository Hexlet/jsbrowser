import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Nav } from 'react-bootstrap';
import { switchTab } from '../slices/tabs';

const TabItem = ({ id, name }) => {
  const currentTabId = useSelector((state) => state.tabs.currentTabId);
  const dispatch = useDispatch();
  const isActive = id === currentTabId ? true : null;

  const changeTab = () => {
    dispatch(switchTab(id));
  };

  return (
    <Nav.Item>
      <Nav.Link onClick={changeTab} className="text-dark" active={isActive}>{name}</Nav.Link>
    </Nav.Item>
  );
};

export default TabItem;
