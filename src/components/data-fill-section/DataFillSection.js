import { Header } from "./header";
import { DataBox } from "./dataBox";
import React from "react";
import { updateProgressIndicator } from "./updateProgressIndicator";
import "./section.css";

function DataFillSection(props) {
  const { personal, contact, education, work, skills, languages } =
    props.dataBoxesValues;
  const {
    dataBoxesValues,
    handleAdd,
    handleChange,
    handleRemove,
    handleAutofill,
    handleClear,
    switchSections,
    switchLogic,
  } = props;

  function callOnFocusOut() {
    console.log("called from DataFillSection", props.dataBoxesValues);
    updateProgressIndicator(props.dataBoxesValues);
    props.updateProgressPoints();
  }

  return (
    <div className="data-fill-section">
      <Header
        values={dataBoxesValues}
        progressPointsReached={props.progressPoints}
      />
      <DataBox
        boxesValues={dataBoxesValues}
        handleAdd={handleAdd}
        handleChange={handleChange}
        handleRemove={handleRemove}
        handleAutofill={handleAutofill}
        handleClear={handleClear}
        onFocusOut={callOnFocusOut}
        switchSections={switchSections}
        switchLogic={switchLogic}
      />
    </div>
  );
}

export { DataFillSection };
