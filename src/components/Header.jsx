import React from 'react';
import {
  Tab, Row, Col, Button,
} from 'react-bootstrap';
import { ArrowLeft, ArrowRight, ArrowClockwise } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import Tabs from './Tabs.jsx';
import Search from './Search.jsx';
import { actions as tabDataActions } from '../slices/tabsData';

import TabsContent from './TabsContent.jsx';
import * as selectors from '../selectors';

const Header = () => {
  const activeTabId = useSelector(selectors.activeTabIdSelector);
  const currentLinks = useSelector(selectors.currentLinksSelector);
  const dispatch = useDispatch();

  const refresh = () => {
    if (activeTabId in currentLinks) {
      const url = currentLinks[activeTabId];
      fetch(url)
        .then((response) => response.text())
        .then((htmlDoc) => {
          const data = { [activeTabId]: htmlDoc };
          dispatch(tabDataActions.updateTabData(data));
        })
        .catch((e) => console.log('something wrong: ', e));
    }
  };

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Tabs />
      <Row>
        <Col sm={1} className="d-flex justify-content-between align-items-center">
          <ArrowLeft size={26} />
          <ArrowRight size={26} />
          <Button variant="outline-secondary" size="sm" onClick={refresh}>
            <ArrowClockwise size={26} />
          </Button>
        </Col>
        <Col sm={11}>
          <Search />
        </Col>
      </Row>

      <Tab.Content className="flex-fill">
        <TabsContent />
      </Tab.Content>
    </Tab.Container>
  );
};
export default Header;
