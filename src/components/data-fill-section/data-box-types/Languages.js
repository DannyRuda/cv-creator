import React from "react";
import { blockSubmit } from "./blockSubmit";
import { mapTogetherInputs } from "./InputfieldMapping";
import { AddButton } from "./CommonFormElements";

function Languages(props) {

  const inputs = mapTogetherInputs(props,blockSubmit,"languages")

  return (
    <div className="data-box language-box">
      <h2 id="box-header">Languages</h2>
      <div className="form no-margin">
        <form onSubmit={blockSubmit}>
          {inputs}
          <AddButton handleAdd={props.handleAdd} category="languages"/>
        </form>
      </div>
    </div>
  );
}

export { Languages };
