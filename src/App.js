import General from "./components/General/General";
import Education from "./components/Education/Education.js";
import Experience from "./components/Experience/Experience.js";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="app">
        <General />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;
