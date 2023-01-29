import React from "react";
import { DataFillSection } from "./components/data-fill-section/DataFillSection";
import { CVPreview } from "./components/cv-preview-section/cvPreview";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.state = {
      personal: [{ first: "", last: "", job: "", description: "" }],
      contact: [{ country: "", city: "", phone: "", email: "" }],
      education: [{ graduation: "", institution: "",start:"",end:"",description:"" }],
      work: [{ position: "", company: "" ,start:"",end:"",description:"" }],
      skills: [],
      languages: [],
    };
  }

  handleAdd(box) {
    this.setState((state, props) => {
      let newValues = {};
      newValues[box] = state[box].concat([{graduation: "", institution: "",start:"",end:"",description:"" }])
      return newValues;
    });
  }

  handleChange(e, index, type, box) {
    const target = e.target;
    let valuesCopy = this.state[box].slice();
    valuesCopy[index][type] = target.value;

    this.setState({ [box]: valuesCopy });
  }

  handleRemove(box,index) {
    let valuesCopy = this.state[box].slice();
    if(box==="languages" || box==="skills") {
      valuesCopy.splice(index,1);
    } else {
      valuesCopy.pop();
    }
    this.setState({ [box]: valuesCopy });
  }

  render() {
    const dataBoxesValues = this.state;
    return (
      <div id="app">
        <DataFillSection dataBoxesValues={dataBoxesValues} handleAdd={this.handleAdd} handleChange={this.handleChange} handleRemove={this.handleRemove}/>
        <CVPreview dataBoxesValues={dataBoxesValues}/>
      </div>
    );
  }
}
export default App;
