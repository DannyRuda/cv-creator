import { Personal } from "./data-box-types/Personal";
import { Contact } from "./data-box-types/Contact";
import { EducationClass } from "./data-box-types/Education";
import { WorkClass } from "./data-box-types/Work";
import { Additional } from "./data-box-types/Additional";
import { Skills, SkillsClass } from "./data-box-types/Skills";
import { LanguagesClass } from "./data-box-types/Languages";
import { updateProgressIndicator } from "./updateProgressIndicator";
import "./dataBox.css";


function DataBox(props) {
  const {personal,contact,education,work,skills,languages} = props.boxesValues;

  function callOnFocusOut() {
    updateProgressIndicator(props.boxesValues);
  }

  const {handleAdd,handleChange,handleRemove} = props;
  return (
    <div className="dataBoxes">
      <Personal values={personal} handleChange={handleChange} onFocusOut={callOnFocusOut} />
      <Contact values={contact} handleChange={handleChange} onFocusOut={callOnFocusOut} />
      <EducationClass values={education} handleAdd={handleAdd} handleChange={handleChange} handleRemove={handleRemove} onFocusOut={callOnFocusOut} />
      <WorkClass values={work} handleAdd={handleAdd} handleChange={handleChange} handleRemove={handleRemove} onFocusOut={callOnFocusOut} />
      <SkillsClass values={skills} handleAdd={handleAdd} handleChange={handleChange} handleRemove={handleRemove} onFocusOut={callOnFocusOut} />
      <LanguagesClass values={languages} handleAdd={handleAdd} handleChange={handleChange} handleRemove={handleRemove} onFocusOut={callOnFocusOut} />
    </div>
  );
}

export { DataBox };
