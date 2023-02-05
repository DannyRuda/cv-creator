import { createRef } from "react";
import { useScreenshot } from "use-react-screenshot";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { CV } from "./cv";
import "./cv-preview.css";

function CVPreview(props) {
  const screenshotRef = createRef();
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
  return (
    <div className="cv-preview">
      <CV screenshot={screenshotRef} values={props.dataBoxesValues} />
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

export { CVPreview };
