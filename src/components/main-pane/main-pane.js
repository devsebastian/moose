import React from 'react';
import './main-pane.css'
// import axios from 'axios'
import Editor from '../editor/editor';
import Tabs from '../tabs/tabs';
import SelectButton from '../select-button/select-btn';

const axios = window.require('axios')

class MainPane extends React.Component {

    constructor() {
        super()
        this.state = {
            url: "",
            activeTab: ""
        }

        this.setUrl = this.setUrl.bind(this)
        this.load = this.load.bind(this)
        this.setActiveTab = this.setActiveTab.bind(this)
    }

    setActiveTab(tab) {
        this.setState({ activeTab: tab })
    }

    setUrl(event) {
        this.setState({ url: event.target.value })
    }

    load() {
        axios({
            method: "GET",
            url: this.state.url,
        }).then(response => {
            this.setState({
                json: JSON.stringify(response.data, null, "\t")
            })
            this.props.setResponse(response)
            console.log(response)
        });

    }

    render() {
        return (
            <div className="pane main-pane" >
                <div className="pane-header main-pane-header">
                    {/* <button className="flat-btn multi-options" id="method-btn">GET</button> */}
                    <SelectButton
                        setActiveMethod={() => { }}
                        left={12}
                        values={[
                            { id: "GET", title: "GET", color: "#000" },
                            { id: "POST", title: "POST", color: "#000" },
                            { id: "PUT", title: "PUT", color: "#000" },
                            { id: "PATCH", title: "PATCH", color: "#000" },
                            { id: "DELETE", title: "DELETE", color: "#000" },
                            { id: "OPTIONS", title: "OPTIONS", color: "#000" },
                            { id: "HEAD", title: "HEAD", color: "#000" },
                        ]}
                    />
                    <input className="url-bar" placeholder="http://your-product/posts/1" value={this.state.url} onChange={this.setUrl} />
                    <button className="flat-btn" onClick={this.load}>SEND</button>
                </div>
                <Tabs tabs={[
                    {
                        title: "JSON",
                        id: "JSON"
                    }, {
                        title: "Auth",
                        id: "Auth"
                    }, {
                        title: "Query",
                        id: "Query"
                    }, {
                        title: "Header",
                        id: "Header"
                    },
                ]}
                    setActiveTab={this.setActiveTab} />
                <div className="pane-body">
                    <Editor id="main-pane-editor" />
                </div>
            </div >
        )
    }
}

export default MainPane;