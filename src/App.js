import React from "react";
import "./App.css";
import PropTypes from "prop-types";

import StaticHeader from "@nowtv/nowtv-web-toolkit/src/react/components/StaticHeader/StaticHeader.react";

function App() {
  return (
    <div className="App">
      <StaticHeader />
    </div>
  );
}
StaticHeader.propTypes = {
  className: PropTypes.string,
  colour: PropTypes.oneOf,
  heading: PropTypes.string
};
export default App;
