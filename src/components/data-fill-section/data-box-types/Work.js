import React from "react";

function Work() {
  return (
    <div class="data-box">
      <h2 id="box-header">Work Experience</h2>

      <form>
        <div class="input-row">
          <input type="text" placeholder="Job Position" />
          <input type="text" placeholder="Company/Institution" />
        </div>
        <div class="input-row">
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
    this.state = { values: [{ position: "", company: "" ,start:"",end:"",description:"" }] };
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
        values: state.values.concat([{ position: "", institution: "" }]),
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
            length === index + 1 ? "form no-margin" : "form"
          }
        >
          <form onSubmit={this.blockSubmit}>
            <InputData company={value.company} position={value.position} handleChange={this.handleChange}
              index={index}/>
            <TimeFrame  handleChange={this.handleChange} index={index}/>
            <textarea placeholder="Description..." col="5" rows="6" onChange={(e)=>{this.handleChange(e,index,"description")}}></textarea>
            {length === index + 1 ? (
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
        <h2 id="box-header">Work Experience</h2>
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
      <input type="text" placeholder="Job Position" value={props.position} onChange={(e) => {
          props.handleChange(e,props.index,"position");
        }}/>
      <input type="text" placeholder="Company" value={props.company} onChange={(e) => {
          props.handleChange(e,props.index,"company");
        }}/>
    </div>
  );
}
export { WorkClass };
