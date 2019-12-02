import React from 'react';
import './side-pane.css'
import SidePaneTab from './side-pane-tab/side-pane-tab'

class SidePane extends React.Component {
    render() {
        let tabs = this.props.requests.map((request, pos) => <SidePaneTab key={pos} color={this.props.colors[request.method]} title={request.title} method={request.method} />)
        return (
            <div className="pane side-pane">
                <div id="resizer-right" className="resizer resizer-right" onMouseDown={this.props.resizeHandler}></div>

                <div className="pane-header">
                    <span style={{ fontWeight: 600 }}>
                        Moose
                </span>
                    <span style={{ fontWeight: 400 }}>
                        &nbsp;| API
                </span>
                </div>
                <div className="pane-body">
                    <div className="search-container">
                        <input className="search-bar" />
                        <button>+</button>
                    </div>
                    {tabs}
                </div>
            </div>
        )
    }
}

export default SidePane;