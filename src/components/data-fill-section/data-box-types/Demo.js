import { DownloadAnchor } from "../download";

function DemoButtons(props) {
  const { handleAutofill, handleClear } = props;
  return (
    <div className="data-box">
      <h2 id="box-header">Demo Functionality</h2>
      <div className="box-anchor" id="Demo"></div>
      <Buttons handleAutofill={handleAutofill} handleClear={handleClear} values={props.values}/>
    </div>
  );
}

function Buttons(props) {
  return (
    <div className="buttons demo">
        <DownloadAnchor  values={props.values} />
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
