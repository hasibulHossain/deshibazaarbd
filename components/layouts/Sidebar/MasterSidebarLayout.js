import React from 'react';
import MainLayout from '../Layout';
import Sidebar from './Sidebar';

const MasterSidebarLayout = (props) => {
  return (
    <>
      <MainLayout>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">{props.children}</div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default MasterSidebarLayout;
