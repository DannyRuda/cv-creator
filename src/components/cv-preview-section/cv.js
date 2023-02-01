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
      <h5>Email Adress</h5>
      <p>{email}</p>
      <h5>Phone Number</h5>
      <p>{phone}</p>
      <h5>Location</h5>
      <p>{city}</p>
      <p>{country}</p>
    </div>
  );
}

function BlockEducation(props) {
  const educationBlock = props.education.map((values) => {
    const { graduation, institution, start, end, description } = values;
    return (
      <div>
        <div className="achievement-with-date">
          <h5>{graduation + ", " + institution}</h5>
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
  const workBlock = props.work.map((values) => {
    const { position, company, start, end, description } = values;
    return (
      <div>
        <div className="achievement-with-date">
          <h5>{position + ", " + company}</h5>
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
  const skillBlocks = props.skills.map((values) => {
    const { skill, level } = values;
    return (
      <div>
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
  const languageBlocks = props.languages.map((values) => {
    const { language, level } = values;
    return (
      <div>
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
