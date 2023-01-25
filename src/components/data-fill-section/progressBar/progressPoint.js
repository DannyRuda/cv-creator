import { getSVG } from "./getSVG";

function Point(props) {
  const pointClass = props.reached ? "point reached" : "point";
  return <div className={pointClass}>{getSVG(props.category)}</div>;
}

function ProgressPoint(props) {
    const className = props.number
      ? `progressPoint ${props.number}`
      : "progressPoint";
    return (
      <div className={className}>
        <Point reached={props.reached} category={props.category} />
        <div className="text">{props.category}</div>
      </div>
    );
  }

export { ProgressPoint };
