import React from 'react';
import './secondary-pane.css'
function SecondaryPane(props) {

    console.log(props.properties);

    var headers = []
    for (var key in props.properties) {
        headers.push(<div className="prop-row">
            <div className="props-key">{key}</div>
            <p>{props.properties[key]}</p>
        </div>)
    }
    return (
        <div className="pane secondary-pane">
            <div id="resizer-left" className="resizer resizer-left" onMouseDown={props.resizeHandler}></div>

            <div className="pane-header">
                Head
            </div>
            <div className="pane-body">
                {headers}
            </div>
        </div>
    )
}

export default SecondaryPane;