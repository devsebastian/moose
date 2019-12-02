import React from 'react';
import './side-pane-tab.css'

function SidePaneTab(props) {
    return (
        <div className="side-pane-tab">
            <div style={{color: props.color}}className="side-pane-tab-method">
                {props.method}
            </div>
            {props.title}
        </div>
    )
}

export default SidePaneTab;