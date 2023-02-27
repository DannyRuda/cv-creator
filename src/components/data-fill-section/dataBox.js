import { DemoButtons } from "./data-box-types/Demo";
import { Personal } from "./data-box-types/Personal";
import { Contact } from "./data-box-types/Contact";
import { Education } from "./data-box-types/Education";
import { Work } from "./data-box-types/Work";
import { Additional } from "./data-box-types/Additional";
import { Skills, SkillsClass } from "./data-box-types/Skills";
import { LanguagesClass } from "./data-box-types/Languages";
import { React, useEffect } from "react";
import { downloadCV } from "./download";
import { DownloadAnchor } from "./download";
import { updateProgressIndicator } from "./updateProgressIndicator";
import "./dataBox.css";

function DataBox(props) {
  const { personal, contact, education, work, skills, languages } =
    props.boxesValues;

  const {
    handleAdd,
    handleChange,
    handleRemove,
    handleAutofill,
    handleClear,
    onFocusOut,
    switchSections,
    switchLogic,
  } = props;

  useEffect(() => {
    updateProgressIndicator(props.boxesValues);
  });

  return (
    <div className="dataBoxes">
      <DownloadAnchor values={props.boxesValues} />
      <DemoButtons
        handleAutofill={handleAutofill}
        handleClear={handleClear}
        values={props.boxesValues}
      />
      <Personal
        values={personal}
        handleChange={handleChange}
        onFocusOut={onFocusOut}
      />
      <Contact
        values={contact}
        handleChange={handleChange}
        onFocusOut={onFocusOut}
      />
      <Education
        values={education}
        handleAdd={handleAdd}
        handleChange={handleChange}
        handleRemove={handleRemove}
        onFocusOut={onFocusOut}
      />
      <Work
        values={work}
        handleAdd={handleAdd}
        handleChange={handleChange}
        handleRemove={handleRemove}
        onFocusOut={onFocusOut}
      />
      <SkillsClass
        values={skills}
        handleAdd={handleAdd}
        handleChange={handleChange}
        handleRemove={handleRemove}
        onFocusOut={onFocusOut}
      />
      <LanguagesClass
        values={languages}
        handleAdd={handleAdd}
        handleChange={handleChange}
        handleRemove={handleRemove}
        onFocusOut={onFocusOut}
      />
      {switchLogic ? (
        <button className="download" id="download" onClick={switchSections}>
          Show CV
        </button>
      ) : (
        <button className="download" id="download" onClick={downloadCV}>
          Download
        </button>
      )}
    </div>
  );
}
function Buttons(props) {
  return (
    <div className="buttons-data-box">
      <button className="download" onClick={downloadCV}>
        Download
      </button>
      <button className="preview" onClick={downloadCV}>
        Preview
      </button>
    </div>
  );
}

export { DataBox };
