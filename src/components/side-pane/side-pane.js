import React from 'react';
import './side-pane.css'
import SidePaneTab from './side-pane-tab/side-pane-tab'


class SidePane extends React.Component {

    constructor() {
        super()
        this.state = {
            requests: []
        }

        this.addRequest = this.addRequest.bind(this);
    }
    componentDidMount() {
        this.setState({
            requests: this.props.requests
        })
    }


    addRequest() {
        this.setState((oldState) => ({
            requests: [...oldState.requests, {
                title: "Dev API",
                method: "POST"
            }]
        })
        )
    }

    render() {
        return (
            <div className="pane side-pane">
                <div id="resizer-right" className="resizer resizer-right" onMouseDown={this.props.resizeHandler}></div>

                <div className="pane-header">
                    <span style={{ fontWeight: 800, fontSize: 18 }}>
                        Moose
                </span>
                    <span style={{ fontWeight: 200, fontSize: 18 }}>
                        &nbsp;| API
                </span>
                </div>
                <div className="pane-body">
                    <div className="search-container">
                        <input className="search-bar" />
                    </div>
                    {this.state.requests.map((request, pos) => <SidePaneTab onClick={this.props.setTab} selected={this.props.selectedPos == pos ? "true" : "false"} key={pos} color={this.props.colors[request.method]} title={request.title} method={request.method} />)}
                </div>
                <div className="floating-action-btn" onClick={this.addRequest}>+</div>
            </div>
        )
    }
}

export default SidePane;