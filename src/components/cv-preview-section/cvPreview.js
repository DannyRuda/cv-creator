import { CV } from "./cv";
import "./cv-preview.css"

function CVPreview() {
  return (
    <div className="cv-preview">
      <CV />
      <button id="print">Download</button>
    </div>
  );
}

export { CVPreview };
