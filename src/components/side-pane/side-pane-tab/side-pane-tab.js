import React from 'react';
import './side-pane-tab.css'

function SidePaneTab(props) {

    var tabClass = props.selected == "true" ? "side-pane-tab side-pane-tab--selected" : "side-pane-tab";
    return (
        <div className={tabClass} onClick={() => props.onClick(props.pos)}>
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