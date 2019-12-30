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
            activeTab: "",
            activeMethod: ""
        }

        this.setUrl = this.setUrl.bind(this)
        this.load = this.load.bind(this)
        this.setActiveTab = this.setActiveTab.bind(this)
        this.setActiveMethod = this.setActiveMethod.bind(this)
    }

    setActiveTab(tab) {
        this.setState({ activeTab: tab })
    }

    setActiveMethod(method) {
        this.setState({ activeMethod: method })
    }

    setUrl(event) {
        this.setState({ url: event.target.value })
    }

    load() {
        axios({
            method: this.state.activeMethod,
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
                        setActiveMethod={this.setActiveMethod}
                        left={12}
                        colors={this.props.colors}
                        values={[
                            { id: "GET", title: "GET", color: this.props.colors["GET"] },
                            { id: "POST", title: "POST", color: this.props.colors["POST"] },
                            { id: "PUT", title: "PUT", color: this.props.colors["PUT"] },
                            { id: "PATCH", title: "PATCH", color: this.props.colors["PATCH"] },
                            { id: "DELETE", title: "DELETE", color: this.props.colors["DELETE"] },
                            { id: "OPTIONS", title: "OPTIONS", color: this.props.colors["OPTIONS"] },
                            { id: "HEAD", title: "HEAD", color: this.props.colors["HEAD"] },
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