import SWDSAimUiLoadScreen from "./sw-ds-aim-ui-load-screen";

import "./App.css";

function App() {
  return (
    <>
      <SWDSAimUiLoadScreen />
      <div>
        <h1>App</h1>
        <form>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default App;
