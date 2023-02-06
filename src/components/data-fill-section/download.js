import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

function downloadCV() {
  const cv = document.querySelector("#cv");
  hideAndScaleCV(cv);
  window.setTimeout(()=>{
    html2canvas(cv).then((canvas) => {
        const imgData = canvas.toDataURL("image/png", 1);
        const pdf = new jsPDF();
        pdf.addImage(imgData, "JPG", 0, 0);
        
          pdf.save("download.pdf");
          showCV(cv);
        })
  },2000)
}

function hideAndScaleCV(cv) {
  cv.style.left = "1000px";
  cv.style.transform = "scale(1.5)";
}

function showCV(cv) {
  cv.style.transform = "scale(1.1)";
  cv.style.left = "0";
}

export { downloadCV };
