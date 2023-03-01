import React, { useCallback, useEffect, useState } from "react";
import { DataFillSection } from "./components/data-fill-section/DataFillSection";
import { CVPreview } from "./components/cv-preview-section/cvPreview";
import { updateProgressIndicator } from "./components/data-fill-section/updateProgressIndicator";
import { checkProgressPoints } from "./components/data-fill-section/updateProgressPoints";
import { initialProgressPoints, initialState, initialValues } from "./initialState";
import { generateEmptyFields } from "./generateEmptyFields";
import {
  autoFillValues,
  clearValues
} from "./components/data-fill-section/Autofill";
import "./App.css";

function AppFunction(props) {
  let [state, setState] = useState(initialState);
  const [values, setValues] = useState(initialValues);
  const [progressPointsReached, setProgressPointsReached] = useState(initialProgressPoints);
  const [section, setSection] = useState("both");
  const [width, setWidth] = useState(window.innerWidth);
  const [windowWidth,setWindowWidth] = useState(window.innerWidth);

  function handleAdd(box) {
    console.log("handleAdd was called in App.js");
    let copyValues = Object.assign({}, values);
    copyValues[box] = copyValues[box].concat([
      generateEmptyFields(box),
    ]);
    setValues(copyValues);
  }

  function handleChange(e, index, type, box) {
    const target = e.target;
    let valuesCopy = JSON.parse(JSON.stringify(values));
    valuesCopy[box][index][type] = target.value;

    setValues(valuesCopy);
  }

  function handleRemove(box, index = 0) {
    let copyValues = Object.assign({}, values);
    if (box === "languages" || box === "skills") {
      copyValues[box].splice(index, 1);
    } else {
      copyValues[box].pop();
    }
    setValues(copyValues);
  }

  function handleAutofill() {
    const newAutofillValues = JSON.parse(JSON.stringify(autoFillValues));
    setValues(newAutofillValues);
  }

  function handleClear() {
    const newClearValues = JSON.parse(JSON.stringify(clearValues));
    setValues(newClearValues)
  }

  const updateProgressPointsT = useCallback(() => {
    const copyState = checkProgressPoints(state);
    setState(copyState);
  }, [state]);

  function updateProgressPoints() {
    setProgressPointsReached(checkProgressPoints(progressPointsReached,values));
  }

  function switchSections() {
    console.log("switch sections");
    let copySection = section;
    copySection =
      copySection === "data-fill" ? "cv-preview" : "data-fill";
    setSection(copySection);
  }

  function update() {
    console.log("update was called")
    let copySection = section;
    let copyWidth = width;
    console.log(width)
    if (copyWidth !== window.innerWidth) {
      copyWidth = window.innerWidth;
      console.log("copyWidth in first if",copyWidth)
      if (copyWidth > 1150 && copySection !== "both") {
        copySection = "both";
      } else if (width <= 1150 && section === "both") {
        copySection = "data-fill";
      }
      setSection(copySection);
      setWidth(copyWidth);
    }
  }

  useEffect(() => {
    update();
  }, [windowWidth]);

  useEffect(() => {
    updateProgressIndicator(values);
    updateProgressPoints();
    
  }, [values]);

  useEffect(()=>{
    window.setInterval(()=>{
      if(windowWidth !== window.innerWidth) {
        setWindowWidth(window.innerWidth);
      }
    },2)
  },[])

  const dataBoxesValues = values;
  console.log(section)
  const sections =
    section === "both" ? (
      <div id="app">
        <DataFillSection
          dataBoxesValues={dataBoxesValues}
          progressPoints={progressPointsReached}
          handleAdd={handleAdd}
          handleChange={handleChange}
          handleRemove={handleRemove}
          handleAutofill={handleAutofill}
          handleClear={handleClear}
          updateProgressPoints={updateProgressPoints}
          switchLogic={false}
        />
        <CVPreview dataBoxesValues={dataBoxesValues} switchLogic={false} />
      </div>
    ) : section === "data-fill" ? (
      <div id="app">
        <DataFillSection
          dataBoxesValues={dataBoxesValues}
          progressPoints={progressPointsReached}
          handleAdd={handleAdd}
          handleChange={handleChange}
          handleRemove={handleRemove}
          handleAutofill={handleAutofill}
          handleClear={handleClear}
          updateProgressPoints={updateProgressPoints}
          switchSections={switchSections}
          switchLogic={true}
        />
      </div>
    ) : (
      <div id="app">
        <CVPreview
          dataBoxesValues={dataBoxesValues}
          switchLogic={true}
          switchSections={switchSections}
        />
      </div>
    );
  return sections;
}

export { AppFunction };
