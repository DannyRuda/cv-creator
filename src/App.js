import React from "react";
import { DataFillSection } from "./components/data-fill-section/DataFillSection";
import { CVPreview } from "./components/cv-preview-section/cvPreview";
import { updateProgressIndicator } from "./components/data-fill-section/updateProgressIndicator";
import "./App.css";

function generateEmptyFields(box) {
  switch (box) {
    case "personal":
      return { first: "", last: "", job: "", description: "" };
      break;
    case "contact":
      return { country: "", city: "", phone: "", email: "" };
      break;
    case "education":
      return {
        graduation: "",
        institution: "",
        start: "",
        end: "",
        description: "",
      };
      break;
    case "work":
      return { position: "", company: "", start: "", end: "", description: "" };
      break;
    case "skills":
      return { skill: "", level: "" };
      break;
    case "languages":
      return { language: "", level: "" };
      break;
      default:
        break;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.state = {
      personal: [{ first: "", last: "", job: "", description: "" }],
      contact: [{ country: "", city: "", phone: "", email: "" }],
      education: [
        {
          graduation: "",
          institution: "",
          start: "",
          end: "",
          description: "",
        },
        
      ],
      work: [
        { position: "", company: "", start: "", end: "", description: "" },
      ],
      skills: [
        { skill: "", level: "" },
        { skill: "", level: "" },
      ],
      languages: [
        { language: "", level: "" },
        { language: "", level: "" },
      ],
    };
  }

  handleAdd(box) {
    console.log("handleAdd was called in App.js")
    this.setState((state, props) => {
      let newValues = {};
      newValues[box] = state[box].concat([
        generateEmptyFields(box),
      ]);
      return newValues;
    },()=>{updateProgressIndicator(this.state)});
  }

  handleChange(e, index, type, box) {
    const target = e.target;
    let valuesCopy = this.state[box].slice();
    valuesCopy[index][type] = target.value;

    this.setState({ [box]: valuesCopy });
  }

  handleRemove(box, index=0) {
    let valuesCopy = this.state[box].slice();
    if (box === "languages" || box === "skills") {
      valuesCopy.splice(index, 1);
    } else {
      valuesCopy.pop();
    }
    this.setState({ [box]: valuesCopy },()=>{updateProgressIndicator(this.state)});
  }

  render() {
    console.log("render was called in app.js with new state")
    const dataBoxesValues = this.state;
    return (
      <div id="app">
        <DataFillSection
          dataBoxesValues={dataBoxesValues}
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
          handleRemove={this.handleRemove}
        />
        <CVPreview dataBoxesValues={dataBoxesValues} />
      </div>
    );
  }
}
export default App;
