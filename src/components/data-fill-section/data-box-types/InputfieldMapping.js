import { Buttons, TimeFrame, InputData } from "./CommonFormElements";

function mapTogetherInputs(props, blockSubmit, category) {
  const { values, handleAdd, handleChange, handleRemove, onFocusOut } = props;
  const length = values.length;
  const inputs = values.map((value, index) => {
    return (
      <div
        key={index}
        className={length === index + 1 ? "form no-margin" : "form"}
      >
        <div className="box-anchor" id="Education"></div>
        <form onSubmit={blockSubmit}>
          <InputData
            graduation={value.graduation}
            institution={value.institution}
            handleChange={handleChange}
            onFocusOut={onFocusOut}
            index={index}
            category={category}
          />
          <TimeFrame
            handleChange={handleChange}
            onFocusOut={onFocusOut}
            index={index}
            start={value.start}
            end={value.end}
            category={category}
          />
          <textarea
            placeholder="Description..."
            value={value.description}
            col="5"
            rows="6"
            onChange={(e) => {
              handleChange(e, index, "description", category);
            }}
            onBlur={onFocusOut}
          ></textarea>
          {length === index + 1 ? (
            <Buttons
              handleAdd={handleAdd}
              handleRemove={handleRemove}
              category={category}
            />
          ) : (
            ""
          )}
        </form>
      </div>
    );
  });

  return inputs;
}

export {mapTogetherInputs}