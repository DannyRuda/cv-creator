import "./progressBar.css";
import { ProgressPoint } from "./progressPoint";

function ProgressBar() {
  return (
    <div className="progressBar">
      <div className="progressLine">
        <ProgressPoint number="one" category="personal" reached={true}/>
        <ProgressPoint number="two" category="contact"/>
        <ProgressPoint number="three" category="education"/>
        <ProgressPoint number="four" category="work"/>
        <ProgressPoint number="five" category="additional"/>
        <div className="indicator"></div>
      </div>
    </div>
  );
}

export { ProgressBar };
