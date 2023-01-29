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
  return (
    <div>
      <Personal values={personal}/>
      <Contact values={contact}/>
      <EducationClass values={education}/>
      <WorkClass values={work}/>
      <SkillsClass values={skills}/>
      <LanguagesClass values={languages}/>
    </div>
  );
}

export { DataBox };
