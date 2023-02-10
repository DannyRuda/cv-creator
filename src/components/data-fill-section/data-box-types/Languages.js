import React from "react";

function Languages() {
  return (
    <div className="data-box">
      <h2 id="box-header">Languages</h2>
      <form>
        <div className="input-row">
          <input type="text" placeholder="Language" />
          <Select />
          <button className="delete">X</button>
        </div>
        <div className="input-row">
          <input type="text" placeholder="Language" />
          <Select />
          <button className="delete">X</button>
        </div>
        <div className="wrap-add-buttons">
          <button className="add">+ Add Language</button>
        </div>
      </form>
    </div>
  );
}

function Select(props) {
  return (
    <select onChange={props.handleChange} onBlur={props.onFocusOut} value={props.value}>
      <option>Beginner</option>
      <option>Intermediate</option>
      <option>Fluent</option>
      <option>Business</option>
      <option>Native</option>
    </select>
  );
}

function AddButton(props) {
  return (
    <div className="wrap-add-buttons">
      <button className="add" onClick={props.handleAdd.bind(this, "languages")}>
        + Add Language
      </button>
    </div>
  );
}

class LanguagesClass extends React.Component {
  constructor(props) {
    super(props);
    this.blockSubmit = this.blockSubmit.bind(this);
  }

  blockSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { values, handleAdd, handleChange, handleRemove,onFocusOut } = this.props;
    const length = values.length;
    const inputs = values.map((value, index) => {
      return (
        <div key={index} className="input-row levels" >
          <input
            type="text"
            placeholder="Language"
            value={value.language}
            onChange={(e) => {
              handleChange(e, index, "language", "languages");
            }}
            onBlur={onFocusOut}
          />
          <Select
            handleChange={(e) => {
              handleChange(e, index, "level", "languages");
            }}
            onFocusOut={onFocusOut}
            value={value.level}
          />
          <button
            className="delete"
            onClick={handleRemove.bind(this, "languages", index)}
          >
            X
          </button>
        </div>
      );
    });
    return (
      <div className="data-box language-box">
        <h2 id="box-header">Languages</h2>
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
export { LanguagesClass };
