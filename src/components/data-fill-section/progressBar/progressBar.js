import "./progressBar.css";
import { ProgressPoint } from "./progressPoint";

function ProgressBar() {
  return (
    <div className="progressBar">
      <div className="progressLine">
        <ProgressPoint number="one" category="Personal" reached={true}/>
        <ProgressPoint number="two" category="Contact"/>
        <ProgressPoint number="three" category="Education"/>
        <ProgressPoint number="four" category="Work"/>
        <ProgressPoint number="five" category="Additional"/>
        <div className="indicator"></div>
      </div>
    </div>
  );
}

export { ProgressBar };
