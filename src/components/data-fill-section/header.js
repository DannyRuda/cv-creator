import { ProgressBar, ProgressBarClass } from "./progressBar/progressBar";
import "./header.css";
import icon from "./favicon.svg";
import { ProgressPoint } from "./progressBar/progressPoint";


function Header(props) {
  console.log(props.progressPointsReached)
  return (
    <div className="header">
      <div className="logo">
        <img src={icon} alt="" />
      </div>
      <ProgressBar values={props.values} progressPointsReached={props.progressPointsReached} />
    </div>
  );
}

function HeaderAlternative() {
  return (
    <div className="alternative-header scrolled">
      <ProgressBar />
    </div>
  );
}

export { Header, HeaderAlternative };
