import React from "react";
import { mapTogetherInputs } from "./InputfieldMapping";
import { blockSubmit } from "./blockSubmit";

function Education(props) {

  const inputFields = mapTogetherInputs(props,blockSubmit,"education");

  return (
    <div className="data-box">
      <h2 id="box-header">Education</h2>
      {inputFields}
      {props.values.length === 0 ? (
        <div className="buttons">
          <button onClick={props.handleAdd.bind(this, "education")}>
            + Add Experience
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export { Education };
