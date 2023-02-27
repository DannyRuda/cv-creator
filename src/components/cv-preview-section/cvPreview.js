import { createRef } from "react";
import { CV } from "./cv";
import { downloadCV } from "../data-fill-section/download";
import "./cv-preview.css";

function CVPreview(props) {
  const screenshotRef = createRef();
  return (
    <div className="cv-preview">
      <CV screenshot={screenshotRef} values={props.dataBoxesValues} />
      {props.switchLogic ? (<Buttons switchSections={props.switchSections} values={props.values}  />) : ""}
    </div>
  );
}

function hideAndScaleCV(cv) {
  cv.style.left = "10000px";
  cv.style.transform = "scale(1.5)";
}

function showCV(cv) {
  cv.style.transform = "scale(1.2)";
  cv.style.left = "0";
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


  /*
    const [, takeScreenshot] = useScreenshot({ type: "image/png", quality: 1.0 });
  function screenshotWithReact() {
    const cv = document.querySelector("#cv");
    hideAndScaleCV(cv);
    takeScreenshot(screenshotRef.current).then((img) => {
      window.setTimeout(() => {
        const pdf = new jsPDF();
        pdf.addImage(img, "JPG", 0, 0);
        pdf.save("download.pdf");
        showCV(cv);
      }, 1000);
    });
  }
  */