import { Header, HeaderAlternative } from "./header";
import { DataBox } from "./dataBox";
import React from "react";
import {
  updateProgressIndicator,
  boxValuesFull,
} from "./updateProgressIndicator";
import { updateProgressPoints } from "./updateProgressPoints";
import "./section.css";

function DataFillSection(props) {
  const { dataBoxesValues, handleAdd, handleChange, handleRemove } = props;

  return (
    <div className="data-fill-section">
      <Header values={dataBoxesValues} />
      <DataBox
        boxesValues={dataBoxesValues}
        handleAdd={handleAdd}
        handleChange={handleChange}
        handleRemove={handleRemove}
      />
    </div>
  );
}

class DataFillSectionClass extends React.Component {
  constructor(props) {
    super(props);
    this.callOnFocusOut = this.callOnFocusOut.bind(this);
  }

  callOnFocusOut() {
    console.log("called from DataFillSection", this.props.dataBoxesValues);
    updateProgressIndicator(this.props.dataBoxesValues);
    this.props.updateProgressPoints();
  }

  render() {
    const { personal, contact, education, work, skills, languages } =
      this.props.dataBoxesValues;
    const {
      dataBoxesValues,
      handleAdd,
      handleChange,
      handleRemove,
      handleAutofill,
      handleClear,
      switchSections,
      switchLogic,
    } = this.props;
    return (
      <div className="data-fill-section">
        <Header
          values={dataBoxesValues}
          progressPointsReached={this.props.progressPoints}
        />
        <DataBox
          boxesValues={dataBoxesValues}
          handleAdd={handleAdd}
          handleChange={handleChange}
          handleRemove={handleRemove}
          handleAutofill={handleAutofill}
          handleClear={handleClear}
          onFocusOut={this.callOnFocusOut}
          switchSections={switchSections}
          switchLogic={switchLogic}
        />
      </div>
    );
  }
}

export { DataFillSection, DataFillSectionClass };
