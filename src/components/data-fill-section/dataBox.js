import { DemoButtons } from "./data-box-types/Demo";
import { Personal } from "./data-box-types/Personal";
import { Contact } from "./data-box-types/Contact";
import { EducationClass } from "./data-box-types/Education";
import { WorkClass } from "./data-box-types/Work";
import { Additional } from "./data-box-types/Additional";
import { Skills, SkillsClass } from "./data-box-types/Skills";
import { LanguagesClass } from "./data-box-types/Languages";
import {React, createRef} from "react"
import { useScreenshot } from "use-react-screenshot";
import { jsPDF } from "jspdf";import { downloadCV } from "./download";
import { DownloadAnchor } from "./download";
import "./dataBox.css";


function DataBox(props) {
  const {personal,contact,education,work,skills,languages} = props.boxesValues;

  const {handleAdd,handleChange,handleRemove, handleAutofill, handleClear, onFocusOut} = props;

  return (
    <div className="dataBoxes">
      <DownloadAnchor  values={props.boxesValues} />
      <DemoButtons handleAutofill={handleAutofill} handleClear={handleClear} values={props.boxesValues} />
      <Personal values={personal} handleChange={handleChange} onFocusOut={onFocusOut} />
      <Contact values={contact} handleChange={handleChange} onFocusOut={onFocusOut} />
      <EducationClass values={education} handleAdd={handleAdd} handleChange={handleChange} handleRemove={handleRemove} onFocusOut={onFocusOut} />
      <WorkClass values={work} handleAdd={handleAdd} handleChange={handleChange} handleRemove={handleRemove} onFocusOut={onFocusOut} />
      <SkillsClass values={skills} handleAdd={handleAdd} handleChange={handleChange} handleRemove={handleRemove} onFocusOut={onFocusOut} />
      <LanguagesClass values={languages} handleAdd={handleAdd} handleChange={handleChange} handleRemove={handleRemove} onFocusOut={onFocusOut} />
      <button id="download" onClick={downloadCV}>
        Download
      </button>
    </div>
    
  );
}

export { DataBox };
