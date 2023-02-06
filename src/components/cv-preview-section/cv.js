import { valuesOrPlaceholder } from "./placeHolder";
import "./cv.css";

function CV(props) {

  function render() {
    const { personal, contact, education, work, skills, languages } =
      valuesOrPlaceholder(props.values);

    return (
      <div className="cv" id="cv" ref={props.screenshot}>
        <div className="information-area">
          <div className="header-card">
            <h2>{personal[0].first + " " + personal[0].last}</h2>
            <h3>{personal[0].job}</h3>
          </div>
          <div className="detailed-blocks">
            <BlockContact contact={contact} />
            <BlockSkills skills={skills} />
            <BlockLanguages languages={languages} />
          </div>
        </div>
        <div className="detailed-area">
          <div className="detailed-blocks">
            <BlockProfile description={personal[0].description} />
            <BlockEducation education={education} />
            <BlockWork work={work} />
          </div>
        </div>
      </div>
    );
  }

  return render();
}

function BlockProfile(props) {
  return (
    <div className="block">
      <h4>Profile</h4>
      <div className="underline"></div>
      <p className="description">{props.description}</p>
    </div>
  );
}

function BlockContact(props) {
  const { email, phone, country, city } = props.contact[0];
  return (
    <div className="block">
      <h4>Contact</h4>
      <div className="underline"></div>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{city}</p>
      <p>{country}</p>
    </div>
  );
}

function BlockEducation(props) {
  const educationBlock = props.education.map((values,index) => {
    const { graduation, institution, start, end, description } = values;
    return (
      <div key={index} className="block-content" >
        <div className="achievement-with-date">
          <div className="central-info" >
          <h5>{graduation}</h5>
          <h5 className="institution" >{institution}</h5>
          </div>
          <p>{start + " - " + end}</p>
        </div>
        <p className="description">{description}</p>
      </div>
    );
  });
  return (
    <div className="block">
      <h4>Education</h4>
      <div className="underline"></div>
      {educationBlock}
    </div>
  );
}

function BlockWork(props) {
  const workBlock = props.work.map((values, index) => {
    const { position, company, start, end, description } = values;
    return (
      <div key={index} >
        <div className="achievement-with-date">
          <div>
            <h5>{position}</h5>
            <h5 className="institution" >{company}</h5>
          </div>
          <p>{start + " - " + end}</p>
        </div>
        <ul>
          <li>{description}</li>
          <li></li>
          <li></li>
        </ul>
        <p className="description"></p>
      </div>
    );
  });
  return (
    <div className="block">
      <h4>Work Experience</h4>
      <div className="underline"></div>
      {workBlock}
    </div>
  );
}

function BlockSkills(props) {
  const skillBlocks = props.skills.map((values, index) => {
    const { skill, level } = values;
    return (
      <div key={index} className="rating-block" >
        <h5>{skill}</h5>
        {getLevelBlock(level)}
      </div>
    );
  });
  return (
    <div className="block">
      <h4>Skills</h4>
      <div className="underline"></div>
      {skillBlocks}
    </div>
  );
}

function BlockLanguages(props) {
  const languageBlocks = props.languages.map((values,index) => {
    const { language, level } = values;
    return (
      <div key={index} className="rating-block" >
        <h5>{language}</h5>
        {getLevelBlock(level)}
      </div>
    );
  });
  return (
    <div className="block">
      <h4>Languages</h4>
      <div className="underline"></div>
      {languageBlocks}
    </div>
  );
}

function getLevelBlock(level) {
  switch (level) {
    case "Beginner":
      return (
        <div className="skill-rating">
          <div className="skill-point filled"></div>
          <div className="skill-point"></div>
          <div className="skill-point"></div>
          <div className="skill-point"></div>
          <div className="skill-point"></div>
        </div>
      );
      break;
    case "Intermediate":
      return (
        <div className="skill-rating">
          <div className="skill-point filled"></div>
          <div className="skill-point filled"></div>
          <div className="skill-point"></div>
          <div className="skill-point"></div>
          <div className="skill-point"></div>
        </div>
      );
      break;
    case "Advanced":
      return (
        <div className="skill-rating">
          <div className="skill-point filled"></div>
          <div className="skill-point filled"></div>
          <div className="skill-point filled"></div>
          <div className="skill-point"></div>
          <div className="skill-point"></div>
        </div>
      );
      break;
    case "Fluent":
      return (
        <div className="skill-rating">
          <div className="skill-point filled"></div>
          <div className="skill-point filled"></div>
          <div className="skill-point filled"></div>
          <div className="skill-point"></div>
          <div className="skill-point"></div>
        </div>
      );
      break;
    case "Proficient" || "Business":
      return (
        <div className="skill-rating">
          <div className="skill-point filled"></div>
          <div className="skill-point filled"></div>
          <div className="skill-point filled"></div>
          <div className="skill-point filled"></div>
          <div className="skill-point"></div>
        </div>
      );
      break;
    case "Business":
      return (
        <div className="skill-rating">
          <div className="skill-point filled"></div>
          <div className="skill-point filled"></div>
          <div className="skill-point filled"></div>
          <div className="skill-point filled"></div>
          <div className="skill-point"></div>
        </div>
      );
      break;
    case "Expert":
      return (
        <div className="skill-rating">
          <div className="skill-point filled"></div>
          <div className="skill-point filled"></div>
          <div className="skill-point filled"></div>
          <div className="skill-point filled"></div>
          <div className="skill-point filled"></div>
        </div>
      );
      break;
    case "Native":
      return (
        <div className="skill-rating">
          <div className="skill-point filled"></div>
          <div className="skill-point filled"></div>
          <div className="skill-point filled"></div>
          <div className="skill-point filled"></div>
          <div className="skill-point filled"></div>
        </div>
      );
      break;
    default:
      break;
  }
}

export { CV };
