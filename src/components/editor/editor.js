import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import './default.css'
import React from 'react'
import 'codemirror/mode/javascript/javascript'
import './editor.css'

class Editor extends React.Component {

    constructor() {
        super()
    }

    componentDidMount() {
        this.cm = new CodeMirror.fromTextArea(document.getElementById(this.props.id), {
            lineNumbers: true,
            value: this.props.value,
            mode: {
                name: "javascript",
                json: true
            },
            theme: "default",
        })
    }

    render() {
        if (this.cm != undefined && this.props.value != undefined) {
            this.cm.setValue(this.props.value)
        }
        return (
            <textarea id={this.props.id} value={this.props.value} className="view-area" />
        )
    }

    componentWillUnmount() {
        this.cm.toTextArea();
    }

}

export default Editor;