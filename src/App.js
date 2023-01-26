import { ProgressBar } from "./components/data-fill-section/progressBar/progressBar";
import { DataBox } from "./components/data-fill-section/dataBox";
import React from "react";

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
    let renderReturn = (
      <div>
        <ProgressBar />
        <DataBox />
      </div>
    );
    if (!this.state.showAll) {
      renderReturn = <DataBox />;
    }
    return (
      <div>
        {renderReturn}
        <button onClick={this.toggleView}>toggle</button>
      </div>
    );
  }
}
export default App;
