import { Personal } from "./data-box-types/Personal";
import { Contact } from "./data-box-types/Contact";
import { Education } from "./data-box-types/Education";
import { Work } from "./data-box-types/Work";
import { Additional } from "./data-box-types/Additional";
import { Skills } from "./data-box-types/Skills";
import "./dataBox.css";

function DataBox() {
  return (
    <div>
      <Personal />
      <Contact />
      <Education />
      <Work />
      <Skills />
    </div>
  );
}

export { DataBox };
