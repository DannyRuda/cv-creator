import "./progressBar.css";
import "./svg.css";
import { ProgressPoint } from "./progressPoint";
import React from "react";

class ProgressBarClass extends React.Component { 
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
  console.log(props)
  const {Personal,Contact,Education,Experience,Additional} = props.progressPointsReached;
  return (
    <div className="progressBar-frame">
      <div className="progressBar">
        <div className="progressLine">
          <div className="startPoint"></div>
          <ProgressPoint number="one" category="Personal" reached={Personal}/>
          <ProgressPoint number="two" category="Contact" reached={Contact} />
          <ProgressPoint number="three" category="Education" reached={Education} />
          <ProgressPoint number="four" category="Experience" reached={Experience} />
          <ProgressPoint number="five" category="Additional" reached={Additional} />
          <div className="indicator"></div>
        </div>
      </div>
    </div>
  );
}


export { ProgressBar, ProgressBarClass };