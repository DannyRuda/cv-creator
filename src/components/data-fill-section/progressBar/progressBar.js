import "./progressBar.css";
import { ProgressPoint } from "./progressPoint";
import React from "react"

class ProgressBarClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {functionActive:false}
  }

  componentDidUpdate() {
    changeProgressIndicator(this.props.values)
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
  const {personal,contact,education,work,skills,languages} = values;
  const progressBar = document.querySelector(".progressBar");
  let multiplicator = 1;
  if (!boxValuesFull(personal)) {
    for(let field in personal[0]) {
      if(personal[0][field]) {multiplicator++}
    }
  } else if (boxValuesFull(personal) && !boxValuesFull(contact)) {
    multiplicator = 6;
    for(let field in contact[0]) {
      if(contact[0][field]) {multiplicator++}
    }
  } else if(boxValuesFull(contact) && !boxValuesFull(education)) {
    multiplicator = 11;
    for(let field in education[0]) {
      if(education[0][field]) {multiplicator++}
    }
  }
  else if(boxValuesFull(education) && !boxValuesFull(work)) {
    multiplicator = 16;
    for(let field in work[0]) {
      if(work[0][field]) {multiplicator++}
    }
  } else if(boxValuesFull(work)) {
    multiplicator = 21;
    for(let field in skills[0]) {
      if(skills[0][field]) {multiplicator += 2}
    }
    for(let field in languages[0]) {
      if(languages[0][field]) {multiplicator += 2}
    }
  }
  progressBar.style.setProperty("--indicator-multiplicator",multiplicator);
}

function boxValuesFull(boxCategory) {
  console.log("box cat",boxCategory)
  let emptyField = false;
  for(let object of boxCategory)
    for(let [key,value] of Object.entries(object)) {
      if(!value) {
        emptyField = true;
      }
    }
  return !emptyField
}

export { ProgressBar, ProgressBarClass };
