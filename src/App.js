import React from "react";
import { DataFillSection } from "./components/data-fill-section/DataFillSection";
import { CVPreview } from "./components/cv-preview-section/cvPreview";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showAll: false };
    this.toggleView = this.toggleView.bind(this);
  }

  toggleView() {
    const newValue = this.state.showAll ? false : true;
    this.setState({ showAll: newValue });
  }

  render() {
    /* 
    let renderReturn = (
      <div>
        <ProgressBar />
        <DataBox />
      </div>
    );
    if (!this.state.showAll) {
      renderReturn = <DataBox />;
    }
    */
    return (
      <div id="app">
        <DataFillSection />
        <CVPreview />
      </div>
    );
  }
}
export default App;
