function Buttons(props) {
  const { category } = props;
  const buttonText = category === "work" ? "Experience" : "Education";

  return (
    <div className="buttons">
      <button onClick={props.handleAdd.bind(this, category)}>
        {`+ Add ${buttonText}`}
      </button>
      <button onClick={props.handleRemove.bind(this, category)}>
        {`x Remove ${buttonText}`}
      </button>
    </div>
  );
}

function TimeFrame(props) {
  return (
    <div className="input-row">
      <input
        type="text"
        placeholder="Start mm/yyyy"
        value={props.start}
        onChange={(e) => {
          props.handleChange(e, props.index, "start", props.category);
        }}
        onBlur={props.onFocusOut}
      />
      <input
        type="text"
        placeholder="End mm/yyyy"
        value={props.end}
        onChange={(e) => {
          props.handleChange(e, props.index, "end", props.category);
        }}
        onBlur={props.onFocusOut}
      />
    </div>
  );
}

function InputData(props) {
  const achievement = props.category === "work" ? "position" : "graduation";
  const place = props.category === "work" ? "company" : "institution";

  return (
    <div className="input-row">
      <input
        type="text"
        placeholder={
          props.category === "work" ? "Job Position" : "Degree/Graduation"
        }
        value={props.achievement}
        onChange={(e) => {
          props.handleChange(e, props.index, achievement, props.category);
        }}
        onBlur={props.onFocusOut}
      />
      <input
        type="text"
        placeholder={
          props.category === "work" ? "Company" : "Institution/School"
        }
        value={props.place}
        onChange={(e) => {
          props.handleChange(e, props.index, place, props.category);
        }}
        onBlur={props.onFocusOut}
      />
    </div>
  );
}

function Select(props) {
  const options =
    props.category === "languages" ? (
      <select
        onChange={props.handleChange}
        onBlur={props.onFocusOut}
        value={props.value}
      >
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Fluent</option>
        <option>Business</option>
        <option>Native</option>
      </select>
    ) : (
      <select
        onChange={props.handleChange}
        onBlur={props.onFocusOut}
        value={props.value}
      >
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
        <option>Proficient</option>
        <option>Expert</option>
      </select>
    );
  return options;
}

function AddButton(props) {
    const ButtonText = props.category === "languages" ? "Language" : "Skill";
  return (
    <div className="wrap-add-buttons">
      <button className="add" onClick={props.handleAdd.bind(this, props.category)}>
        {`+ Add ${ButtonText}`}
      </button>
    </div>
  );
}

export { Buttons, InputData, TimeFrame, AddButton, Select };
