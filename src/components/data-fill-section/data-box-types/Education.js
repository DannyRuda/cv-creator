import React from "react";

function Education() {
  return (
    <div class="data-box">
      <h2 id="box-header">Education</h2>
      <div className="form">
        <form className="form">
          <div class="input-row">
            <input type="text" placeholder="Degree/Graduation" />
            <input type="text" placeholder="Institution/School" />
          </div>
          <div class="input-row">
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
    this.state = {
      values: [
        {
          graduation: "",
          institution: "",
          start: "",
          end: "",
          description: "",
        },
      ],
    };
    this.blockSubmit = this.blockSubmit.bind(this);
  }

  blockSubmit(e) {
    e.preventDefault();
  }

  render() {
    const length = this.props.values.length;
    const inputs = this.props.values.map((value, index) => {
      return (
        <div className={length === index + 1 ? "form no-margin" : "form"}>
          <form onSubmit={this.blockSubmit}>
            <InputData
              graduation={value.graduation}
              institution={value.institution}
              handleChange={this.props.handleChange}
              index={index}
            />
            <TimeFrame handleChange={this.handleChange} index={index} />
            <textarea
              placeholder="Description..."
              col="5"
              rows="6"
              onChange={(e) => {
                this.handleChange(e, index, "description");
              }}
            ></textarea>
            {this.props.values.length === index + 1 ? (
              <Buttons
                handleAdd={this.props.handleAdd}
                handleRemove={this.props.handleRemove}
              />
            ) : (
              ""
            )}
          </form>
        </div>
      );
    });
    return (
      <div class="data-box">
        <h2 id="box-header">Education</h2>
        {inputs}
        {length === 0 ? (
          <div className="buttons">
            <button onClick={this.props.handleAdd.bind(this, "education")}>
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
    <div class="input-row">
      <input
        type="text"
        placeholder="Start mm/yyyy"
        onChange={(e) => {
          props.handleChange(e, props.index, "start");
        }}
      />
      <input
        type="text"
        placeholder="End mm/yyyy"
        onChange={(e) => {
          props.handleChange(e, props.index, "end");
        }}
      />
    </div>
  );
}

function InputData(props) {
  return (
    <div class="input-row">
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
