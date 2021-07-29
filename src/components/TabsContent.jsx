import React from 'react';
import { TabPane } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import * as selectors from '../selectors';

// iframe template for development
import IframeTemplate from './IframeTemplate.jsx';

const TabsContent = () => {
  const activeTabId = useSelector(selectors.activeTabIdSelector);
  const tabList = useSelector(selectors.tabsListSelector);

  return (
    <>
      {tabList.map((tabData) => {
        const isActive = tabData.id === activeTabId;

        return (
          <TabPane active={isActive} key={tabData.id} className="h-100">
            <IframeTemplate tabData={tabData} />
          </TabPane>
        );
      })}
    </>
  );
};

export default TabsContent;
