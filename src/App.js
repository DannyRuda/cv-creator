import React from "react";
import { DataFillSection } from "./components/data-fill-section/DataFillSection";
import { CVPreview } from "./components/cv-preview-section/cvPreview";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: [{ first: "", last: "", job: "", description: "" }],
      contact: [{ country: "", city: "", phone: "", email: "" }],
      education: [{ graduation: "", institution: "",start:"",end:"",description:"" }],
      work: [],
      skills: [],
      languages: [],
    };
  }

  render() {
    const dataBoxesValues = this.state;
    return (
      <div id="app">
        <DataFillSection dataBoxesValues={dataBoxesValues}/>
        <CVPreview />
      </div>
    );
  }
}
export default App;
