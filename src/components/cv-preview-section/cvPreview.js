import { createRef } from "react";
import { CV,DownloadableCV } from "./cv";
import { downloadCV } from "../data-fill-section/download";
import "./cv-preview.css";

function CVPreview(props) {
  const screenshotRef = createRef();
  return (
    <div className="cv-preview">
      <CV screenshot={screenshotRef} values={props.dataBoxesValues} />
      <DownloadableCV screenshot={screenshotRef} values={props.dataBoxesValues} />
      {props.switchLogic ? (<Buttons switchSections={props.switchSections} values={props.values}  />) : ""}
    </div>
  );
}

function Buttons(props) {
  return (
    <div className="buttons cv-section">
      <button className="edit" onClick={()=>{props.switchSections();}}>
        Edit
      </button>
      <button className="download" onClick={downloadCV}>
        Download
      </button>
    </div>
  );
}

export { CVPreview };
