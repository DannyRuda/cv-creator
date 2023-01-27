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
    this.state = { values: [{ graduation: "", institution: "",start:"",end:"",description:"" }] };
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
        values: state.values.concat([{ graduation: "", institution: "" }]),
      };
    });
  }

  handleRemove() {
    let valuesCopy = this.state.values.slice();
    valuesCopy.pop();
    this.setState({ values: valuesCopy });
  }

  handleChange(e, index, type,) {
    const target = e.target;
    let valuesCopy = this.state.values.slice();
    valuesCopy[index][type] = target.value;
    this.setState({ values: valuesCopy });
  }

  render() {
    const length = this.state.values.length;
    const inputs = this.state.values.map((value, index) => {
      return (
        <div
          className={
            this.state.values.length === index + 1 ? "form no-margin" : "form"
          }
        >
          <form onSubmit={this.blockSubmit}>
            <InputData
              graduation={value.graduation}
              institution={value.institution}
              handleChange={this.handleChange}
              index={index}
            />
            <TimeFrame handleChange={this.handleChange} index={index}
            />
            <textarea placeholder="Description..." col="5" rows="6" onChange={(e)=>{this.handleChange(e,index,"description")}}></textarea>
            {this.state.values.length === index + 1 ? (
              <Buttons
                handleAdd={this.handleAdd}
                handleRemove={this.handleRemove}
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
            <button onClick={this.handleAdd}>+ Add Experience</button>
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
      <button onClick={props.handleAdd}>+ Add Experience</button>
      <button onClick={props.handleRemove}>x Remove Experience</button>
    </div>
  );
}

function TimeFrame(props) {
  return (
    <div class="input-row">
      <input type="text" placeholder="Start mm/yyyy" onChange={(e)=>{props.handleChange(e,props.index,"start")}}/>
      <input type="text" placeholder="End mm/yyyy" onChange={(e)=>{props.handleChange(e,props.index,"end")}}/>
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
          props.handleChange(e,props.index,"graduation");
        }}
      />
      <input
        type="text"
        placeholder="Institution/School"
        value={props.institution}
        onChange={(e) => {
          props.handleChange(e,props.index,"institution");
        }}
      />
    </div>
  );
}

export { EducationClass };
