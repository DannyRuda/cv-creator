import React from "react";
import { DataFillSectionClass } from "./components/data-fill-section/DataFillSection";
import { CVPreview } from "./components/cv-preview-section/cvPreview";
import { updateProgressIndicator } from "./components/data-fill-section/updateProgressIndicator";
import { checkProgressPoints } from "./components/data-fill-section/updateProgressPoints";
import {
  autofillObject,
  clearObject,
} from "./components/data-fill-section/Autofill";
import {
  determineSection,
  determineWidth,
  updateWidth,
} from "./determineSection";
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
    this.handleAutofill = this.handleAutofill.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.switchSections = this.switchSections.bind(this);
    this.updateProgressPoints = this.updateProgressPoints.bind(this);
    this.state = {
      values: {
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
      },
      progressPointsReached: {
        Personal: false,
        Contact: false,
        Education: false,
        Experience: false,
        Additional: false,
      },
      sections: "both",
      width: "",
    };
  }

  handleAdd(box) {
    console.log("handleAdd was called in App.js");
    let copyState = Object.assign({}, this.state);
    copyState.values[box] = copyState.values[box].concat([
      generateEmptyFields(box),
    ]);
    this.setState(copyState, () => {
      updateProgressIndicator(this.state.values);
      this.updateProgressPoints();
    });
  }

  handleChange(e, index, type, box) {
    const target = e.target;
    let valuesCopy = this.state.values[box].slice();
    valuesCopy[index][type] = target.value;

    this.setState({ [box]: valuesCopy });
  }

  handleRemove(box, index = 0) {
    let copyState = Object.assign({}, this.state);
    if (box === "languages" || box === "skills") {
      copyState.values[box].splice(index, 1);
    } else {
      copyState.values[box].pop();
    }
    this.setState(copyState, () => {
      updateProgressIndicator(this.state.values);
      this.updateProgressPoints();
    });
  }

  handleAutofill() {
    const newAutofillObject = JSON.parse(JSON.stringify(autofillObject));
    this.setState(newAutofillObject, () => {
      updateProgressIndicator(this.state.values);
      this.updateProgressPoints();
    });
  }

  handleClear() {
    this.setState(clearObject, () => {
      updateProgressIndicator(this.state.values);
      this.updateProgressPoints();
    });
  }

  updateProgressPoints() {
    const copyState = checkProgressPoints(this.state);
    this.setState(copyState);
  }

  switchSections() {
    console.log("switch sections")
    const copyState = JSON.parse(JSON.stringify(this.state));
    copyState.sections = copyState.sections === "data-fill" ? "cv-preview" : "data-fill";
    this.setState(copyState);
  }

  update() {
    this.setState((state,props)=>{
      const copyState = JSON.parse(JSON.stringify(state));
      if(copyState.width !== window.innerWidth) {
        copyState.width = window.innerWidth;
        if(copyState.width > 1150 && copyState.sections!=="both") {
          copyState.sections = "both"
        } 
        else if(copyState.width <= 1150 && copyState.sections === "both") {
          copyState.sections = "data-fill";
        }
      }
      return copyState;
    })
  }

  componentDidMount() {
    this.update();
    window.setInterval(()=>{this.update()},2)
  }

  render() {
    const dataBoxesValues = this.state.values;
    const sections =
      this.state.sections === "both" ? (
        <div id="app">
          <DataFillSectionClass
            dataBoxesValues={dataBoxesValues}
            progressPoints={this.state.progressPointsReached}
            handleAdd={this.handleAdd}
            handleChange={this.handleChange}
            handleRemove={this.handleRemove}
            handleAutofill={this.handleAutofill}
            handleClear={this.handleClear}
            updateProgressPoints={this.updateProgressPoints}
            switchLogic={false}
          />
          <CVPreview dataBoxesValues={dataBoxesValues} switchLogic={false} />
        </div>
      ) : this.state.sections === "data-fill" ? (
        <div id="app">
          <DataFillSectionClass
            dataBoxesValues={dataBoxesValues}
            progressPoints={this.state.progressPointsReached}
            handleAdd={this.handleAdd}
            handleChange={this.handleChange}
            handleRemove={this.handleRemove}
            handleAutofill={this.handleAutofill}
            handleClear={this.handleClear}
            updateProgressPoints={this.updateProgressPoints}
            switchSections={this.switchSections}
            switchLogic={true}
          />
        </div>
      ) : (
        <div id="app">
          <CVPreview
            dataBoxesValues={dataBoxesValues}
            switchLogic={true}
            switchSections={this.switchSections}
          />
        </div>
      );
    return sections;
  }
}
export default App;
