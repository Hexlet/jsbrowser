import React from 'react';
import { TabPane } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import * as selectors from '../selectors';

// iframe template for development
import IframeTemplate from './IframeTemplate.jsx';

const TabsContent = () => {
  const activeTabId = useSelector(selectors.activeTabIdSelector);
  const tabList = useSelector(selectors.tabsListSelector);
  const tabLinks = useSelector(selectors.currentLinksSelector);

  return (
    <>
      {tabList.map((tabListData) => {
        const isActive = tabListData.id === activeTabId;
        const currentTabId = tabListData.id;
        const tabLink = tabLinks[currentTabId];

        return (
          <TabPane active={isActive} key={tabListData.id} className="h-100">
            <IframeTemplate
              link={tabLink}
            />
          </TabPane>
        );
      })}
    </>
  );
};

export default TabsContent;
