import { Personal } from "./data-box-types/Personal";
import { Contact } from "./data-box-types/Contact";
import { EducationClass } from "./data-box-types/Education";
import { WorkClass } from "./data-box-types/Work";
import { Additional } from "./data-box-types/Additional";
import { Skills, SkillsClass } from "./data-box-types/Skills";
import { LanguagesClass } from "./data-box-types/Languages";
import { updateProgressIndicator } from "./updateProgressIndicator";
import React from "react"
import "./dataBox.css";


function DataBox(props) {
  const {personal,contact,education,work,skills,languages} = props.boxesValues;

  function callOnFocusOut() {
    updateProgressIndicator(props.boxesValues);
  }

  const {handleAdd,handleChange,handleRemove, onFocusOut} = props;
  return (
    <div className="dataBoxes">
      <Personal values={personal} handleChange={handleChange} onFocusOut={onFocusOut} />
      <Contact values={contact} handleChange={handleChange} onFocusOut={onFocusOut} />
      <EducationClass values={education} handleAdd={handleAdd} handleChange={handleChange} handleRemove={handleRemove} onFocusOut={onFocusOut} />
      <WorkClass values={work} handleAdd={handleAdd} handleChange={handleChange} handleRemove={handleRemove} onFocusOut={onFocusOut} />
      <SkillsClass values={skills} handleAdd={handleAdd} handleChange={handleChange} handleRemove={handleRemove} onFocusOut={onFocusOut} />
      <LanguagesClass values={languages} handleAdd={handleAdd} handleChange={handleChange} handleRemove={handleRemove} onFocusOut={onFocusOut} />
    </div>
  );
}

export { DataBox };
