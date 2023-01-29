import { Header, HeaderAlternative } from "./header"
import { DataBox } from "./dataBox"

function DataFillSection(props) {
    const {dataBoxesValues,handleAdd,handleChange,handleRemove} = props;
    return (
        <div className="data-fill-section">
            <Header />
            <DataBox boxesValues={dataBoxesValues} handleAdd={handleAdd} handleChange={handleChange} handleRemove={handleRemove} />
        </div>
    )
}

export {DataFillSection}