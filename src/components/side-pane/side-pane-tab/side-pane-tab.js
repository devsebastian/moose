import React from 'react';
import './side-pane-tab.css'

function SidePaneTab(props) {
    return (
        <div className="side-pane-tab">
            <div className="side-pane-tab-title">
                {props.title}
            </div>
            <div style={{ color: props.color }} className="side-pane-tab-method">
                {props.method}
            </div>
        </div>
    )
}

export default SidePaneTab;