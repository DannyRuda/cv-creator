function DemoButtons(props) {
    const {handleAutofill,handleClear} = props;
    return (
      <div className="data-box">
        <h2 id="box-header">Demo Functionality</h2>
        <div className="box-anchor" id="Demo" ></div>
        <Buttons handleAutofill={handleAutofill} handleClear={handleClear} />
      </div>
    );
  }
  
  function Buttons(props) {
    return (
      <div className="buttons demo">
        <button id="autofill" onClick={props.handleAutofill}>
          Autofill
        </button>
        <button id="clear" onClick={props.handleClear}>
          Clear
        </button>
      </div>
    );
  }

  export { DemoButtons };
  