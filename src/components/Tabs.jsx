import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Nav, Button, OverlayTrigger, Tooltip,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import * as selectors from '../selectors';
import { actions as tabActions } from '../slices/tabs';
import TabItem from './TabItem.jsx';

const Tabs = () => {
  const tabsList = useSelector(selectors.tabsListSelector);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleAddNewTab = () => {
    dispatch(tabActions.addNewTab());
  };

  return (
    <Nav variant="tabs">
      {tabsList.map(({ id, name }) => (
        <TabItem key={id} id={id} name={name} />
      ))}
      <OverlayTrigger key="right" placement="right" overlay={<Tooltip>{t('tabs.addButton.tooltip')}</Tooltip>}>
        <Button variant="light" onClick={handleAddNewTab}>{t('tabs.addButton.text')}</Button>
      </OverlayTrigger>
    </Nav>
  );
};

export default Tabs;
