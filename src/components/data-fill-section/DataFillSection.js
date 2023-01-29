import { Header, HeaderAlternative } from "./header"
import { DataBox } from "./dataBox"

function DataFillSection(props) {
    return (
        <div className="data-fill-section">
            <Header />
            <DataBox boxesValues={props.dataBoxesValues}/>
        </div>
    )
}

export {DataFillSection}