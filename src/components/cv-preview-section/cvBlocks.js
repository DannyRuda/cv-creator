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

function BlockWorkOrEducation(props) {
  const header = props.category === "work" ? "Work Experience" : "Education";

  const block = props[props.category].map((values, index) => {
    const [achievement, place, start, end, description] = Object.values(values);
    return (
      <div key={index} className="block-content">
        <div className="achievement-with-date">
          <div>
            <h5>{achievement}</h5>
            <h5 className="institution">{place}</h5>
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
      <h4>{header}</h4>
      <div className="underline"></div>
      {block}
    </div>
  );
}

function BlockLanguagesOrSkills(props) {
  const header = props.category === "languages" ? "Languages" : "Skills";

  const Blocks = props[props.category].map((values, index) => {
    const [subject, level] = Object.values(values);
    return (
      <div key={index} className="rating-block">
        <h5>{subject}</h5>
        <LevelBlock level={level} />
      </div>
    );
  });
  return (
    <div className="block">
      <h4>{header}</h4>
      <div className="underline"></div>
      {Blocks}
    </div>
  );
}

function LevelBlock(props) {
  switch (props.level) {
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

export {
  BlockProfile,
  BlockContact,
  BlockWorkOrEducation,
  BlockLanguagesOrSkills,
  LevelBlock,
};
