import { Buttons, TimeFrame, InputData,Select } from "./CommonFormElements";

function mapTogetherInputs(props, blockSubmit, category) {
  if(category==="work"||category==="education") {
    return mapEducationOrWork(props,blockSubmit,category)

  } else {
    return mapLanguageOrSkills(props,category)
  }
}

function mapEducationOrWork(props,blockSubmit,category) {
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


function mapLanguageOrSkills(props,category) {
  const subject = category === "languages" ? "language" : "skill";
  const { values, handleChange, handleRemove,onFocusOut } = props;
    const inputs = values.map((value, index) => {
      return (
        <div key={index} className="input-row levels" >
          <input
            type="text"
            placeholder={category === "languages" ? "Language" : "Skill"}
            value={value[subject]}
            onChange={(e) => {
              handleChange(e, index, subject, category);
            }}
            onBlur={onFocusOut}
          />
          <Select
            handleChange={(e) => {
              handleChange(e, index, "level", category);
            }}
            onFocusOut={onFocusOut}
            value={value.level}
            category={category}
          />
          <button
            className="delete"
            onClick={handleRemove.bind(this, category, index)}
          >
            X
          </button>
        </div>
      );
    });
    return inputs;
}

export {mapTogetherInputs}