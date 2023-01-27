import { ProgressBar } from "./progressBar/progressBar";
import "./header.css"
import logo from "./logo.png"
function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt=""/>
      </div>
      <ProgressBar />
    </div>
  );
}


export {Header}