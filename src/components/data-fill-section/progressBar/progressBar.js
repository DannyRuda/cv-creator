import "./progressBar.css";
import { ProgressPoint } from "./progressPoint";
import React from "react";

class ProgressBarClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { functionActive: false };
  }

  componentDidUpdate() {
    changeProgressIndicator(this.props.values);
  }

  render() {
    return (
      <div className="progressBar-frame">
        <div className="progressBar">
          <div className="progressLine">
            <div className="startPoint"></div>
            <ProgressPoint number="one" category="Personal" />
            <ProgressPoint number="two" category="Contact" />
            <ProgressPoint number="three" category="Education" />
            <ProgressPoint number="four" category="Experience" />
            <ProgressPoint number="five" category="Additional" />
            <div className="indicator"></div>
          </div>
        </div>
      </div>
    );
  }
}

function ProgressBar(props) {
  return (
    <div className="progressBar-frame">
      <div className="progressBar">
        <div className="progressLine">
          <div className="startPoint"></div>
          <ProgressPoint number="one" category="Personal" />
          <ProgressPoint number="two" category="Contact" />
          <ProgressPoint number="three" category="Education" />
          <ProgressPoint number="four" category="Experience" />
          <ProgressPoint number="five" category="Additional" />
          <div className="indicator"></div>
        </div>
      </div>
    </div>
  );
}

function changeProgressIndicator(values) {
  const { personal, contact, education, work, skills, languages } = values;
  const progressBar = document.querySelector(".progressBar");
  let portion = 0;
  for (let field in personal[0]) {
    if (personal[0][field]) {
      portion += portionIncrease(personal);
    }
  }
  if(boxValuesFull(personal)) {portion = getPortionOfReachedStagesAndPoints(1)}

  for (let field in contact[0]) {
    if (contact[0][field]) {
      portion += portionIncrease(contact);
    }
  }
  if(boxValuesFull(contact)) {portion = getPortionOfReachedStagesAndPoints(2)}

  for (let object of education) {
    for (let field in object) {
      if (object[field]) {
        portion += portionIncrease(education);
      }
    }
  }
  if(boxValuesFull(education)) {portion = getPortionOfReachedStagesAndPoints(3)}

  for (let object of work) {
    for (let field in object) {
      if (object[field]) {
        portion += portionIncrease(work);
      }
    }
  }
  if(boxValuesFull(work)) {portion = getPortionOfReachedStagesAndPoints(4)}

  for (let object of skills) {
    for (let field in object) {
      if (object[field]) {
        portion += portionIncrease(skills)/2;
      }
    }
  }

  for (let object of languages) {
    for (let field in object) {
      if (object[field]) {
        portion += portionIncrease(languages)/2;
      }
    }
  }
  if(boxValuesFull(skills) && boxValuesFull(languages)) {portion = getPortionOfReachedStagesAndPoints(5)}

  progressBar.style.setProperty("--indicator-portion", portion);
}

function boxValuesFull(boxCategory) {
  console.log("box cat", boxCategory);
  let emptyField = false;
  for (let object of boxCategory)
    for (let [key, value] of Object.entries(object)) {
      if (!value) {
        emptyField = true;
      }
    }
  return !emptyField;
}

function totalStageSteps(category) {
  let steps = 0;
  
    for (let object of category) {
      steps += Object.keys(object).length;
    }
  
  return steps;
}

function getPointDiameter() {
  const progressBarStyles = getComputedStyle(
    document.querySelector(".progressBar")
  );
  const stageDistance = Number(progressBarStyles.getPropertyValue("--point-diameter").split("p")[0])
    return stageDistance;
}

function portionIncrease(category) {
  return (1/5 * (1-4*getPortionOfOnePoint()))/totalStageSteps(category);
}

function getPortionOfOnePoint() {
  const progressBarStyles = getComputedStyle(
    document.querySelector(".progressBar")
  );
  const pointDiameter = getPointDiameter();
  const barLength = Number(progressBarStyles.getPropertyValue("--bar-length").split("p")[0]);
  const startPointDiameter = Number(progressBarStyles.getPropertyValue("--start-point-diameter").split("p")[0])
  return pointDiameter/(barLength - pointDiameter - startPointDiameter);
}

function getPortionOfReachedStagesAndPoints(reachedStages) {
  const pointPortion = getPortionOfOnePoint();
  const stagePortion = 1/5 * (1-4*getPortionOfOnePoint());
  return reachedStages * (pointPortion + stagePortion);
}

export { ProgressBar, ProgressBarClass };
