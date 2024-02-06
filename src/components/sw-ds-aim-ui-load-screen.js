import Center from "./center";
import Wing1 from "./wing-1";
import Wing2 from "./wing-2";
import Wing3 from "./wing-3";
import Wing4 from "./wing-4";
import Wing5 from "./wing-5";
import Wing6 from "./wing-6";

import "./sw-ds-aim-ui-load-screen.css";

export const SWDSAimUiLoadScreen = () => {
  return (
    <>
      <div id="container">
        <div id="content">
          <Center />
        </div>
        <div id="content">
          <Wing1 />
        </div>
        <div id="content">
          <Wing2 />
        </div>
        <div id="content">
          <Wing3 />
        </div>
        <div id="content">
          <Wing4 />
        </div>
        <div id="content">
          <Wing5 />
        </div>
        <div id="content">
          <Wing6 />
        </div>
        <div id="background"></div>
      </div>
    </>
  );
};
