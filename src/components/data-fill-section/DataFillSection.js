import { Header, HeaderAlternative } from "./header"
import { DataBox } from "./dataBox"
import React from "react";
import { updateProgressIndicator,boxValuesFull } from "./updateProgressIndicator";
import { updateProgressPoints } from "./updateProgressPoints";
import "./section.css"

function DataFillSection(props) {
    const {dataBoxesValues,handleAdd,handleChange,handleRemove} = props;



    return (
        <div className="data-fill-section">
            <Header values={dataBoxesValues}/>
            <DataBox boxesValues={dataBoxesValues} handleAdd={handleAdd} handleChange={handleChange} handleRemove={handleRemove} />
        </div>
    )
}

class DataFillSectionClass extends React.Component {
    constructor(props) {
      super(props)
      this.callOnFocusOut = this.callOnFocusOut.bind(this);
      this.updateProgressPoints = this.updateProgressPoints.bind(this,this.props.dataBoxesValues)
      this.state = {progressPointsReached:{
        Personal: false,
        Contact:false,
        Education:false,
        Experience:false,
        Additional:false
      }}
    }
  
    updateProgressPoints(values) {
        console.log("updateProgressPoints was called")
        const {personal,contact,education,work,skills,languages} = values;
        const copyState = Object.assign({},this.state);
       if(boxValuesFull(personal)) {
        copyState.progressPointsReached.Personal = true;
       } else {
        copyState.progressPointsReached.Personal = false;
       }
       if(boxValuesFull(contact)) {
        copyState.progressPointsReached.Contact = true;
       } else {
        copyState.progressPointsReached.Contact = false;
       }
       if(boxValuesFull(education)) {
        copyState.progressPointsReached.Education = true;
       } else {
        copyState.progressPointsReached.Education = false;
       }
       if(boxValuesFull(work)) {
        copyState.progressPointsReached.Experience = true;
       } else {
        copyState.progressPointsReached.Experience = false;
       }
       if(boxValuesFull(skills) && boxValuesFull(languages)) {
        copyState.progressPointsReached.Additional = true;
       } else {
        copyState.progressPointsReached.Additional = false;
       }
       this.setState(copyState)
    }
  
    callOnFocusOut() {
      updateProgressIndicator(this.props.dataBoxesValues);
      this.updateProgressPoints();
    }
  
    render() {
        console.log("DatafillSection alla")
      const {personal,contact,education,work,skills,languages} = this.props.dataBoxesValues;
      const {dataBoxesValues,handleAdd,handleChange,handleRemove,} = this.props;
    return (
        <div className="data-fill-section">
        <Header values={dataBoxesValues} progressPointsReached={this.state.progressPointsReached}/>
        <DataBox boxesValues={dataBoxesValues} handleAdd={handleAdd} handleChange={handleChange} handleRemove={handleRemove} onFocusOut={this.callOnFocusOut} />
    </div>
    );
    }
  }

export {DataFillSection, DataFillSectionClass}