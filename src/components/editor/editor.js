import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import './default.css'
import React from 'react'
import './editor.css'


class Editor extends React.Component {
    render() {
        return <CodeMirror
            value={this.props.value}
            options={{
                smartIndent: true,
                indentWithTabs: true,
                indentUnit: 4,
                mode: { name: "javascript", json: true },
                theme: "default",
                lineNumbers: true
            }}
            onChange={(editor, data, value) => {
                if (this.props.onChange !== undefined && typeof this.props.onChange === 'function')
                    this.props.onChange(data);
            }}
        />
    }
}

export default Editor;