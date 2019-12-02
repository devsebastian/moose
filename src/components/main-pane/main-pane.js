import React from 'react';
import './main-pane.css'
import CodeMirror from 'codemirror'
import './codemirror.css'
import 'codemirror/mode/javascript/javascript'

class MainPane extends React.Component {

    componentDidMount(){
        new CodeMirror.fromTextArea(document.getElementById("view-area"), {
            lineNumbers: true,
            mode: "javascript",
            lineWrapping: false,
        })
    }

    render() {
        return (
            < div className="pane main-pane" >
                <div className="pane-header">
                    <button className="flat-btn multi-options">GET</button>
                    <input className="url-bar" placeholder="http://your-product/posts/1" />
                    <button className="flat-btn">SEND</button>
                </div>
                <div className="pane-body">
                    <textarea id="view-area" className="view-area"></textarea>
                </div>
            </div >
        )
    }
}

export default MainPane;