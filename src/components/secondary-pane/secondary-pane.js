import React from 'react';
import './secondary-pane.css'
import Tabs from '../tabs/tabs';
import Editor from '../editor/editor'
import minimise from '../../assets/minimise.svg'
import maximise from '../../assets/maximise.svg'
import close from '../../assets/close.svg'
import restore from '../../assets/restore.svg'

const { dialog } = window.require('electron').remote

const { remote } = window.require('electron')

class SecondaryPane extends React.Component {

    constructor() {
        super()
        this.state = {
            activeTab: "",
            body: <div></div>
        }

        this.setActiveTab = this.setActiveTab.bind(this)
    }

    setActiveTab(tab) {
        this.setState({ activeTab: tab })
    }

    setBody(b) {
        this.setState({ body: b })
    }

    closeWindow() {
        var window = remote.BrowserWindow.getFocusedWindow();
        window.close();
    }

    minimizeWindow() {
        var window = remote.BrowserWindow.getFocusedWindow();
        window.minimize();
    }

    maximizeWindow() {
        var window = remote.BrowserWindow.getFocusedWindow();
        window.isMaximized() ? window.unmaximize() : window.maximize();
    }

    render() {
        return (
            <div className="pane secondary-pane">
                <div id="resizer-left" className="resizer resizer-left" onMouseDown={this.props.resizeHandler}></div>
                <div className="pane-header secondary-pane-header">
                    <div class="title-bar-spacer"></div>
                    <img className="title-bar-icon title-bar-icon--normal" onClick={this.minimizeWindow} src={minimise} />
                    <img className="title-bar-icon title-bar-icon--normal" onClick={this.maximizeWindow} src={maximise} />
                    <img className="title-bar-icon title-bar-icon--close" onClick={this.closeWindow} src={close} />
                </div>
                <Tabs tabs={[
                    {
                        title: "Preview",
                        id: "Preview"
                    },
                    {
                        title: "Header",
                        id: "Header"
                    },
                    {
                        title: "Cookie",
                        id: "Cookie"
                    },
                    {
                        title: "Timeline",
                        id: "Timeline"
                    }
                ]}

                    setActiveTab={this.setActiveTab}
                />
                <div className="pane-body">
                    <Body title={this.state.activeTab} response={this.props.response} />
                </div>
            </div>
        )
    }

}


class Body extends React.Component {

    constructor() {
        super()
    }

    render() {
        const { response, title } = this.props
        if (title === "Preview") return (<Editor id="secondary-pane-editor" value={JSON.stringify(response.data, null, "\t")} />)
        if (title === "Header") {
            var headers = []
            for (var key in response.headers) {
                if (Array.isArray(response.headers[key])) {
                    for (var val of response.headers[key]) {
                        headers.push(<div className="prop-row">
                            <div className="props-key">{key}</div>
                            <div className="props-value">{val}</div>
                        </div>)
                    }

                } else {
                    headers.push(<div className="prop-row">
                        <div className="props-key">{key}</div>
                        <div className="props-value">{response.headers[key]}</div>
                    </div>)
                }
            }
            return (headers);
        } else if (title === "Cookie") {
            var headers = []
            if (response.headers != undefined && Array.isArray(response.headers["set-cookie"]))
                for (var val of response.headers["set-cookie"]) {
                    var vals = val.split(';')
                    var headerItem = []
                    for (var v of vals) {
                        var item = v.split('=')
                        headerItem.push(<div className="props-key">{item[0]}</div>);
                        headerItem.push(<div className="props-value">{item[1]}</div>);
                    }

                    headers.push(<div className="prop-row">{headerItem}</div>)
                }
            return (headers);
        } else {
            return (<div></div>)

        }
    }
}

export default SecondaryPane;