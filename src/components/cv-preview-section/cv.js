import "./cv.css";

function CV() {
  return (
    <div className="cv">
      <div className="information-area">
        <div className="header-card">
          <h2>Danny Ruda</h2>
          <h3>Software Engineer</h3>
        </div>
        <div className="detailed-blocks">
          <BlockContact />
          <BlockSkills />
        </div>
      </div>
      <div className="detailed-area">
        <div className="detailed-blocks">
          <BlockProfile />
          <BlockEducation />
          <BlockWork />
        </div>
      </div>
    </div>
  );
}

function BlockProfile() {
  return (
    <div className="block">
      <h4>Profile</h4>
      <div className="underline"></div>
      <p className="description">
        Here comes a detailed description of the person that sends the cv
      </p>
    </div>
  );
}

function BlockEducation() {
  return (
    <div className="block">
      <h4>Education</h4>
      <div className="underline"></div>
      <div className="achievement-with-date">
        <h5>B.Sc. Maschinenbau, RUB</h5>
        <p>10/2017 - 03/2023</p>
      </div>
      <p className="description">
        Number one student in my year with 1.0 Score
      </p>
    </div>
  );
}

function BlockWork() {
  return (
    <div className="block">
      <h4>Work Experience</h4>
      <div className="underline"></div>
      <div className="achievement-with-date">
        <h5>Junior Software Developer, Google Inc.</h5>
        <p>10/2017 - 03/2023</p>
      </div>
      <ul>
        <li>
          Solved complex algorythm problem with reactjs and with javascript with
          custom react hooks and{" "}
        </li>
        <li>Solved another problem</li>
        <li>AAAnd another one</li>
      </ul>
      <p className="description"></p>
    </div>
  );
}

function BlockContact() {
  return (
    <div className="block">
      <h4>Contact</h4>
      <div className="underline"></div>
      <h5>Email Adress</h5>
      <p>derdanny.dr@gmail.com</p>
      <h5>Phone Number</h5>
      <p>01520/1420439</p>
      <h5>Location</h5>
      <p>Duisburg</p>
      <p>Germany</p>
    </div>
  );
}

function BlockSkills() {
    return (
      <div className="block">
        <h4>Skills</h4>
        <div className="underline"></div>
        <h5>ReactJS</h5>
        <div className="skill-rating">
            <div className="skill-point filled"></div>
            <div className="skill-point filled"></div>
            <div className="skill-point filled"></div>
            <div className="skill-point"></div>
            <div className="skill-point"></div>
        </div>
        <h5>javascript</h5>
        <div className="skill-rating">
            <div className="skill-point filled"></div>
            <div className="skill-point filled"></div>
            <div className="skill-point filled"></div>
            <div className="skill-point filled"></div>
            <div className="skill-point filled"></div>
        </div>
        <h5>CSS3</h5>
        <div className="skill-rating">
            <div className="skill-point filled"></div>
            <div className="skill-point filled"></div>
            <div className="skill-point filled"></div>
            <div className="skill-point filled"></div>
            <div className="skill-point filled"></div>
        </div>
        <h5>HTML5</h5>
        <div className="skill-rating">
            <div className="skill-point filled"></div>
            <div className="skill-point filled"></div>
            <div className="skill-point filled"></div>
            <div className="skill-point filled"></div>
            <div className="skill-point"></div>
        </div>
        <h5>Git/GitHub</h5>
        <div className="skill-rating">
            <div className="skill-point filled"></div>
            <div className="skill-point filled"></div>
            <div className="skill-point filled"></div>
            <div className="skill-point"></div>
            <div className="skill-point"></div>
        </div>
      </div>
    );
  }

export { CV };
