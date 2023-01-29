import React from "react";

function Skills() {
  return (
    <div class="data-box">
      <h2 id="box-header">Skills</h2>
      <form>
        <div class="input-row">
          <input type="text" placeholder="skill" />
          <Select />
          <button className="delete">X</button>
        </div>
        <div class="input-row">
          <input type="text" placeholder="skill" />
          <Select />
          <button className="delete">X</button>
        </div>
        <div className="wrap-add-buttons">
          <button class="add">+ Add skill</button>
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
    const {values,handleAdd,handleChange,handleRemove} = this.props;
    const length = values.length;
    const inputs = values.map((value, index) => {
      return (
        <div class="input-row" key={index}>
          <input
            type="text"
            placeholder="skill"
            value={value.skill}
            onChange={(e) => {
              handleChange(e, index, "skill","skills");
            }}
          />
          <Select
            handleChange={(e) => {
              handleChange(e, index, "level","skills");
            }}
            value={value.level}
          />
          <button
            className="delete"
            onClick={handleRemove.bind(this, "skills",index)}
          >
            X
          </button>
        </div>
      );
    });
    return (
      <div class="data-box">
        <h2 id="box-header">Skills</h2>
        <div className="form no-margin">
          <form onSubmit={this.blockSubmit}>
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
    <select onChange={props.handleChange} value={props.value}>
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
      <button class="add" onClick={props.handleAdd.bind(this,"skills")}>
        + Add skill
      </button>
    </div>
  );
}

export { SkillsClass };
