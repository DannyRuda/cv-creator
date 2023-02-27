import React from "react";
import { mapTogetherInputs } from "./InputfieldMapping";
import { blockSubmit } from "./blockSubmit";

function Work(props) {

  const inputFields = mapTogetherInputs(props,blockSubmit,"work");

  return (
    <div className="data-box">
      <h2 id="box-header">Work</h2>
      {inputFields}
      {props.values.length === 0 ? (
        <div className="buttons">
          <button onClick={props.handleAdd.bind(this, "work")}>
            + Add Experience
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export { Work };
