import React from 'react';
import { TabPane } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import * as selectors from '../selectors';

// iframe template for development
import IframeTemplate from './IframeTemplate.jsx';

const TabsContent = () => {
  const activeTabId = useSelector(selectors.activeTabIdSelector);
  const tabList = useSelector(selectors.tabsListSelector);
  const tabsData = useSelector(selectors.tabsDataSelector);

  return (
    <>
      {tabList.map((tabListData) => {
        const isActive = tabListData.id === activeTabId;
        const currentTabId = tabListData.id;
        const tabData = tabsData[currentTabId];

        return (
          <TabPane active={isActive} key={tabListData.id} className="h-100">
            <IframeTemplate tabData={tabData} />
          </TabPane>
        );
      })}
    </>
  );
};

export default TabsContent;
