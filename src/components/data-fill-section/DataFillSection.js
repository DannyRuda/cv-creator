import { Header, HeaderAlternative } from "./header"
import { DataBox } from "./dataBox"
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

export {DataFillSection}