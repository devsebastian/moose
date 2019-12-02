import React from 'react';
import './side-pane.css'
import SidePaneTab from './side-pane-tab/side-pane-tab'

function SidePane(props) {

    let tabs = props.requests.map((request, pos) => <SidePaneTab key={pos} color={props.colors[request.method]} title={request.title} method={request.method}  />)
    return (
        <div className="pane side-pane">
            <div className="pane-header">
                <span style={{ fontWeight: 600 }}>
                    Moose
                </span>
                <span style={{ fontWeight: 400 }}>
                    &nbsp;| API
                </span>
            </div>
            <div className="pane-body">
                {tabs}
            </div>
        </div>
    )
}

export default SidePane;