import React from 'react';
import {
  Tab, Row, Col, Button,
} from 'react-bootstrap';
import { ArrowLeft, ArrowRight, ArrowClockwise } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import Tabs from './Tabs.jsx';
import Search from './Search.jsx';
import { updateTabData } from '../slices/tabsData';

import TabsContent from './TabsContent.jsx';
import * as selectors from '../selectors';

const Header = () => {
  const activeTabId = useSelector(selectors.activeTabIdSelector);
  const currentLinks = useSelector(selectors.currentLinksSelector);
  const historyTabs = useSelector(selectors.historyTabsSelector);
  const currentHistoryTab = historyTabs[activeTabId] ?? [];
  const url = currentLinks[activeTabId];
  const currentIndexURL = currentHistoryTab.indexOf(url);
  const lastIndexHistory = currentHistoryTab.length - 1;
  const dispatch = useDispatch();

  const refresh = async () => {
    if (activeTabId in currentLinks) {
      dispatch(updateTabData({ activeTabId, url }));
    }
  };

  const backwardHistory = () => {
    const previosIndex = currentIndexURL - 1;
    dispatch(updateTabData({ activeTabId, url: currentHistoryTab[previosIndex] }));
  };

  const forwardsHistory = () => {
    const nextIndex = currentIndexURL + 1;
    dispatch(updateTabData({ activeTabId, url: currentHistoryTab[nextIndex] }));
  };

  const isFirstHistory = () => currentIndexURL === 0 || currentIndexURL === -1;

  const isLastHistory = () => currentIndexURL === lastIndexHistory || currentIndexURL === -1;

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Tabs />
      <Row>
        <Col sm={2} className="d-flex justify-content-around align-items-center">
          <Button disabled={isFirstHistory()} variant="outline-secondary" size="sm" onClick={backwardHistory}>
            <ArrowLeft size={26} />
          </Button>
          <Button disabled={isLastHistory()} variant="outline-secondary" size="sm" onClick={forwardsHistory}>
            <ArrowRight size={26} />
          </Button>
          <Button variant="outline-secondary" size="sm" onClick={refresh}>
            <ArrowClockwise size={26} />
          </Button>
        </Col>
        <Col sm={10}>
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
