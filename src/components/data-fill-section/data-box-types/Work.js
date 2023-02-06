import React from "react";

function Work() {
  return (
    <div className="data-box">
      <h2 id="box-header">Work Experience</h2>

      <form>
        <div className="input-row">
          <input type="text" placeholder="Job Position" />
          <input type="text" placeholder="Company/Institution" />
        </div>
        <div className="input-row">
          <input type="text" placeholder="Start Date mm/yyyy" />
          <input type="text" placeholder="End Date mm/yyyy" />
        </div>
        <textarea placeholder="Description..." col="5" rows="6"></textarea>
        <div className="buttons">
          <button>+ Add Experience</button>
          <button>x Remove Experience</button>
        </div>
      </form>
    </div>
  );
}

class WorkClass extends React.Component {
  constructor(props) {
    super(props);
    this.blockSubmit = this.blockSubmit.bind(this);
  }

  blockSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { values, handleAdd, handleChange, handleRemove ,onFocusOut } = this.props;
    const length = values.length;
    const inputs = values.map((value, index) => {
      return (
        <div key={index} className={length === index + 1 ? "form no-margin" : "form"}>
        <div className="box-anchor" id="Experience" ></div>
          <form onSubmit={this.blockSubmit} >
            <InputData
              company={value.company}
              position={value.position}
              handleChange={handleChange}
              index={index}
              onFocusOut={onFocusOut}
            />
            <TimeFrame handleChange={handleChange} index={index} onFocusOut={onFocusOut} start={value.start} end={value.end} />
            <textarea
              placeholder="Description..."
              value={value.description}
              col="5"
              rows="6"
              onChange={(e) => {
                handleChange(e, index, "description", "work");
              }}
              onBlur={onFocusOut}
            ></textarea>
            {length === index + 1 ? (
              <Buttons handleAdd={handleAdd} handleRemove={handleRemove} onBlur={onFocusOut}/>
            ) : (
              ""
            )}
          </form>
        </div>
      );
    });
    return (
      <div className="data-box">
        <h2 id="box-header">Work Experience</h2>
        {inputs}
        {length === 0 ? (
          <div className="buttons">
            <button onClick={handleAdd.bind(this, "work")}>
              + Add Experience
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

function Buttons(props) {
  return (
    <div className="buttons">
      <button onClick={props.handleAdd.bind(this, "work")}>
        + Add Experience
      </button>
      <button onClick={props.handleRemove.bind(this, "work")}>
        x Remove Experience
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
          props.handleChange(e, props.index, "start", "work");
        }}
        onBlur={props.onFocusOut}
      />
      <input
        type="text"
        placeholder="End mm/yyyy"
        value={props.end}
        onChange={(e) => {
          props.handleChange(e, props.index, "end", "work");
        }}
        onBlur={props.onFocusOut}
      />
    </div>
  );
}

function InputData(props) {
  return (
    <div className="input-row">
      <input
        type="text"
        placeholder="Job Position"
        value={props.position}
        onChange={(e) => {
          props.handleChange(e, props.index, "position", "work");
        }}
        onBlur={props.onFocusOut}
      />
      <input
        type="text"
        placeholder="Company"
        value={props.company}
        onChange={(e) => {
          props.handleChange(e, props.index, "company", "work");
        }}
        onBlur={props.onFocusOut}
      />
    </div>
  );
}
export { WorkClass };
