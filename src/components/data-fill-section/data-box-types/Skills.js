import React from "react";

function Skills() {
  return (
    <div className="data-box">
      <h2 id="box-header">Skills</h2>
      <form>
        <div className="input-row">
          <input type="text" placeholder="skill" />
          <Select />
          <button className="delete">X</button>
        </div>
        <div className="input-row">
          <input type="text" placeholder="skill" />
          <Select />
          <button className="delete">X</button>
        </div>
        <div className="wrap-add-buttons">
          <button className="add">+ Add skill</button>
        </div>
      </form>
    </div>
  );
}

class SkillsClass extends React.Component {
  constructor(props) {
    super(props);
    this.blockSubmit = this.blockSubmit.bind(this);
  }

  blockSubmit(e) {
    e.preventDefault();
  }

  render() {
    const {values,handleAdd,handleChange,handleRemove, onFocusOut} = this.props;
    const length = values.length;
    const inputs = values.map((value, index) => {
      return (
        <div key={index} className="input-row" >
          <input
            type="text"
            placeholder="skill"
            value={value.skill}
            onChange={(e) => {
              handleChange(e, index, "skill","skills");
            }}
            onBlur={onFocusOut}
          />
          <Select
            handleChange={(e) => {
              handleChange(e, index, "level","skills");
            }}
            onFocusOut={onFocusOut}
            value={value.level}
          />
          <button
            className="delete"
            onClick={handleRemove.bind(this, "skills",index)}
            onBlur={onFocusOut}
          >
            X
          </button>
        </div>
      );
    });
    return (
      <div className="data-box">
        <h2 id="box-header">Skills</h2>
        <div className="form no-margin">
          <div className="box-anchor" id="Additional" ></div>
          <form onSubmit={this.blockSubmit} >
            {inputs}
            <AddButton handleAdd={handleAdd} />
          </form>
        </div>
      </div>
    );
  }
}

function Select(props) {
  return (
    <select onChange={props.handleChange} onBlur={props.onFocusOut} value={props.value}>
      <option>Beginner</option>
      <option>Intermediate</option>
      <option>Advanced</option>
      <option>Proficient</option>
      <option>Expert</option>
    </select>
  );
}

function AddButton(props) {
  return (
    <div className="wrap-add-buttons">
      <button className="add" onClick={props.handleAdd.bind(this,"skills")}>
        + Add skill
      </button>
    </div>
  );
}

export { SkillsClass };
