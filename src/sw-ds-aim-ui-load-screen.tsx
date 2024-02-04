import React from "react";

import "./sw-ds-aim-ui-load-screen.css";
import Center from "./center";
import Wing1 from "./wing-1";

const SWDSAimUiLoadScreen = () => {
  return (
    <>
      <div id="container">
        <div id="content">
          <Center />
        </div>
        <div id="content">
          <Wing1 />
        </div>
        <div id="background"></div>
      </div>
    </>
  );
};

export default SWDSAimUiLoadScreen;
