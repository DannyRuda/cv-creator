import "./progressBar.css";
import { ProgressPoint } from "./progressPoint";

function ProgressBar() {
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

export { ProgressBar };
