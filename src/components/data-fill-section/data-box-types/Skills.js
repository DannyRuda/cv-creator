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
    this.state = {
      values: [
        { skill: "", level: "" },
        { skill: "", level: "" },
      ],
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.blockSubmit = this.blockSubmit.bind(this);
  }

  blockSubmit(e) {
    e.preventDefault();
  }

  handleAdd() {
    this.setState((state, props) => {
      return {
        values: state.values.concat([{ skill: "", level: "" }]),
      };
    });
  }

  handleRemove(index) {
    let valuesCopy = this.state.values.slice();
    valuesCopy.splice(index, 1);
    this.setState({ values: valuesCopy });
  }

  handleChange(e, index, type) {
    const target = e.target;
    let valuesCopy = this.state.values.slice();
    valuesCopy[index][type] = target.value;
    this.setState({ values: valuesCopy });
  }

  render() {
    const inputs = this.state.values.map((value, index) => {
      return (
        <div class="input-row" key={index}>
          <input
            type="text"
            placeholder="skill"
            value={value.skill}
            onChange={(e) => {
              this.handleChange(e, index, "skill");
            }}
          />
          <Select
            handleChange={(e) => {
              this.handleChange(e, index, "level");
            }}
            value={value.level}
          />
          <button
            className="delete"
            onClick={this.handleRemove.bind(this, index)}
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
            <AddButton handleAdd={this.handleAdd} />
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
      <button class="add" onClick={props.handleAdd}>
        + Add skill
      </button>
    </div>
  );
}

export { SkillsClass };
