import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { downloadIcon } from "./svg-components";
import { allBoxesFull } from "./updateProgressIndicator";

function downloadCV() {
  const cv = document.querySelector("#cv");
  hideAndScaleCV(cv);
  window.setTimeout(() => {
    html2canvas(cv).then((canvas) => {
      const imgData = canvas.toDataURL("image/png", 1);
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPG", 0, 0);

      pdf.save("download.pdf");
      showCV(cv);
    });
  }, 2000);
}

function hideAndScaleCV(cv) {
  cv.style.left = "1000px";
  cv.style.transform = "scale(1.5)";
}

function showCV(cv) {
  cv.style.transform = "scale(1.1)";
  cv.style.left = "0";
}

function DownloadAnchor(props) {
  return allBoxesFull(props.values) ? 
    (<a
    className="download-anchor fresh"
    href="#download"
    onMouseEnter={(e) => {
      e.target.classList.remove("fresh");
    }}
    onClick={(e)=>{e.target.classList.add("hide")}}
  >
    {downloadIcon}
  </a>)
  : null
}

export { downloadCV, DownloadAnchor };
