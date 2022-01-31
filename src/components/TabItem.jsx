import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import * as selectors from '../selectors';
import { actions as tabActions } from '../slices/tabs';

const TabItem = ({ id, name }) => {
  const activeTabId = useSelector(selectors.activeTabIdSelector);
  const dispatch = useDispatch();
  const isActive = id === activeTabId;
  const { t } = useTranslation();

  const handleSwitchToTab = () => {
    dispatch(tabActions.switchToTab({ id }));
  };

  const handleTabClosing = () => {
    dispatch(tabActions.closeTab({ id }));
  };

  return (
    <Nav.Item className="d-flex position-relative">
      <Nav.Link onClick={handleSwitchToTab} className="text-dark pe-4" active={isActive}>{name}</Nav.Link>
      <button
        type="button"
        className="close position-absolute align-self-center x-tab-close-button fw-normal"
        aria-label={t('tabs.closeButton')}
        onClick={handleTabClosing}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </Nav.Item>
  );
};

export default TabItem;
