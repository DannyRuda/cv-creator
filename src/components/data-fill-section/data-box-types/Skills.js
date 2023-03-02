import React from "react";
import { blockSubmit } from "./blockSubmit";
import { mapTogetherInputs } from "./InputfieldMapping";
import { AddButton } from "./CommonFormElements";

function Skills(props) {

  const inputs = mapTogetherInputs(props,blockSubmit,"skills")

  return (
    <div className="data-box language-box">
      <h2 id="box-header">Skills</h2>
      <div className="form no-margin">
      <div id="Additional" className="box-anchor"></div>
        <form onSubmit={blockSubmit}>
          {inputs}
          <AddButton handleAdd={props.handleAdd} category="skills"/>
        </form>
      </div>
    </div>
  );
}

export { Skills };
