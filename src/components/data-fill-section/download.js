import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { downloadIcon } from "./svg-components";
import { allBoxesFull } from "./updateProgressIndicator";

function downloadCV() {
  const cv = document.querySelector(".downloadable-cv");

  html2canvas(cv).then((canvas) => {
    const imgData = canvas.toDataURL("image/png", 1);
    const pdf = new jsPDF();
    pdf.addImage(imgData, "JPG", 0, 0);

    const pfdSaved = pdf.save("download.pdf");
    console.log(pfdSaved);
  });
}

function DownloadAnchor(props) {
  return allBoxesFull(props.values) ? (
    <a
      className="download-anchor fresh"
      href="#download"
      onMouseEnter={(e) => {
        e.target.classList.remove("fresh");
      }}
      onClick={(e) => {
        e.target.classList.add("hide");
      }}
    >
      {downloadIcon}
    </a>
  ) : null;
}

export { downloadCV, DownloadAnchor };

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
