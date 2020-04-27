import React from 'react'

import { PageRoute, Footer } from "..";

function MainPanel() {
  return (
    <>
      <div className="main-panel">
        <div className="content-wrapper">
          <PageRoute />
          {/* <FileUpload /> */}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MainPanel;
