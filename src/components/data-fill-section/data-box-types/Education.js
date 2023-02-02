import React from "react";

function Education() {
  return (
    <div className="data-box">
      <h2 id="box-header">Education</h2>
      <div className="form">
        <form className="form">
          <div className="input-row">
            <input type="text" placeholder="Degree/Graduation" />
            <input type="text" placeholder="Institution/School" />
          </div>
          <div className="input-row">
            <input type="text" placeholder="Start mm/yyyy" />
            <input type="text" placeholder="Start mm/yyyy" />
          </div>
          <textarea placeholder="Description..." col="5" rows="6"></textarea>
          <div className="buttons">
            <button>Previous</button>
            <button>Add Education</button>
          </div>
        </form>
      </div>
    </div>
  );
}

class EducationClass extends React.Component {
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
        <div key={index} className={length === index + 1 ? "form no-margin" : "form"}>
          <div className="box-anchor" id="Education" ></div>
          <form onSubmit={this.blockSubmit} >
            <InputData
              graduation={value.graduation}
              institution={value.institution}
              handleChange={handleChange}
              index={index}
            />
            <TimeFrame handleChange={handleChange} index={index} />
            <textarea
              placeholder="Description..."
              col="5"
              rows="6"
              onChange={(e) => {
                handleChange(e, index, "description","education");
              }}
            ></textarea>
            {length === index + 1 ? (
              <Buttons
                handleAdd={handleAdd}
                handleRemove={handleRemove}
              />
            ) : (
              ""
            )}
          </form>
        </div>
      );
    });
    return (
      <div className="data-box">
        <h2 id="box-header">Education</h2>
        {inputs}
        {length === 0 ? (
          <div className="buttons">
            <button onClick={handleAdd.bind(this, "education")}>
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
      <button onClick={props.handleAdd.bind(this, "education")}>
        + Add Experience
      </button>
      <button onClick={props.handleRemove.bind(this, "education")}>
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
        onChange={(e) => {
          props.handleChange(e, props.index, "start","education");
        }}
      />
      <input
        type="text"
        placeholder="End mm/yyyy"
        onChange={(e) => {
          props.handleChange(e, props.index, "end","education");
        }}
      />
    </div>
  );
}

function InputData(props) {
  return (
    <div className="input-row">
      <input
        type="text"
        placeholder="Degree/Graduation"
        value={props.graduation}
        onChange={(e) => {
          props.handleChange(e, props.index, "graduation", "education");
        }}
      />
      <input
        type="text"
        placeholder="Institution/School"
        value={props.institution}
        onChange={(e) => {
          props.handleChange(e, props.index, "institution", "education");
        }}
      />
    </div>
  );
}

export { EducationClass };
