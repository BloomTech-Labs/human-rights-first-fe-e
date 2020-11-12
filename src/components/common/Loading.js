import React, { useState, useEffect } from 'react';
import { Tabs, Button, Popover } from 'antd';
import axios from 'axios';
import GraphNew from './GraphNew';

import About from '../common/About';
import FiltersForm from './FilterForm';
import 'antd/dist/antd.css';
import '../../styles/index.css';

export const Loading = () => {
  const { TabPane } = Tabs;
  const [initialData, setInitailData] = useState(null);

  const openFilters = (
    <Popover
      placement="bottomRight"
      title={<span>Filter Your Results</span>}
      content={<FiltersForm />}
      trigger="click"
    >
      <Button type="link">Open Filters</Button>
    </Popover>
  );

  useEffect(() => {
    axios
      .get(
        'http://hrf-ds-e-labs-28.eba-pp4ytmti.us-east-1.elasticbeanstalk.com/getdata'
      )
      .then(res => {
        setInitailData(res.data);
      });
  }, []);

  return (
    <div>
      <main>
        <Tabs
          defaultActiveKey="1"
          type="card"
          size="large"
          tabBarExtraContent={openFilters}
        >
          {/* <TabPane tab="Map" key="1">
            <div id="map" style={{ display: 'block' }}>
              {<Map />}
            </div>
          </TabPane> */}
          <TabPane tab="Graph" key="2" style={{ backgroundColor: '#191a1a' }}>
            <div id="graph">
              {initialData && <GraphNew initialData={initialData} />}
            </div>
          </TabPane>
          <TabPane tab="About" key="3">
            <div id="about">{<About />}</div>
          </TabPane>
        </Tabs>
      </main>
      <footer className="page-footer">
        <small>© Copyright 2020. All rights reserved.</small>
        <ul></ul>
      </footer>
    </div>
  );
};
