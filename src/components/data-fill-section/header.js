import { ProgressBar } from "./progressBar/progressBar";
import "./header.css";
import logo from "./logo.png";
import icon from "./favicon.svg";
function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={icon} alt="" />
      </div>
      <ProgressBar />
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
