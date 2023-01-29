import { Personal } from "./data-box-types/Personal";
import { Contact } from "./data-box-types/Contact";
import { EducationClass } from "./data-box-types/Education";
import { WorkClass } from "./data-box-types/Work";
import { Additional } from "./data-box-types/Additional";
import { Skills, SkillsClass } from "./data-box-types/Skills";
import { LanguagesClass } from "./data-box-types/Languages";
import "./dataBox.css";


function DataBox(props) {
  const {personal,contact,education,work,skills,languages} = props.boxesValues;
  const {handleAdd,handleChange,handleRemove} = props;
  return (
    <div>
      <Personal values={personal} handleChange={handleChange}/>
      <Contact values={contact} handleChange={handleChange} />
      <EducationClass values={education} handleAdd={handleAdd} handleChange={handleChange} handleRemove={handleRemove} />
      <WorkClass values={work} handleAdd={handleAdd} handleChange={handleChange} handleRemove={handleRemove} />
      <SkillsClass values={skills} handleAdd={handleAdd} handleChange={handleChange} handleRemove={handleRemove} />
      <LanguagesClass values={languages} handleAdd={handleAdd} handleChange={handleChange} handleRemove={handleRemove} />
    </div>
  );
}

export { DataBox };
