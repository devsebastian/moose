import React from 'react';
import './main-pane.css'
import CodeMirror from 'codemirror'
import './codemirror.css'
import 'codemirror/mode/javascript/javascript'
import './night.css'
import axios from 'axios'

class MainPane extends React.Component {

    constructor() {
        super()
        this.state = {
            url: ""
        }

        this.setUrl = this.setUrl.bind(this)
        this.load = this.load.bind(this)
        this.setValue = this.setValue.bind(this);
    }

    componentDidMount() {
        this.cm = new CodeMirror.fromTextArea(document.getElementById("view-area"), {
            lineNumbers: true,
            mode: {
                name: "javascript",
                json: true
            },
            readOnly: true,
            lineWrapping: false,
            theme: "default"
        })
    }

    setUrl(event) {
        console.log(event.target.value);
        this.setState({ url: event.target.value })
    }

    setValue(response) {
        this.cm.setValue(JSON.stringify(response.data, null, "\t"));
        this.props.propertyHandler(response.headers)
    }

    load() {
        // fetch(this.state.url).then(data => data.json()).then(this.setValue)
        axios({
            method: "GET",
            url: this.state.url,
        }).then(this.setValue);
    }

    render() {
        return (
            < div className="pane main-pane" >
                <div className="pane-header">
                    <button className="flat-btn multi-options">GET</button>
                    <input className="url-bar" placeholder="http://your-product/posts/1" value={this.state.url} onChange={this.setUrl} />
                    <button className="flat-btn" onClick={this.load}>SEND</button>
                </div>
                <div className="pane-body">
                    <textarea id="view-area" className="view-area" />
                </div>
            </div >
        )
    }
}

export default MainPane;