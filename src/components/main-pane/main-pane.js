import React from 'react';
import './main-pane.css'
import Editor from '../editor/editor';
import Tabs from '../tabs/tabs';
import SelectButton from '../select-button/select-btn';
import QueryPage from '../query-page/query-page';
import HeaderPage from '../header-page/header-page';

const axios = window.require('axios')

class MainPane extends React.Component {

    constructor() {
        super()
        this.state = {
            url: "",
            activeTab: "",
            activeMethod: "",
            query: "",
        }

        this.setUrl = this.setUrl.bind(this)
        this.load = this.load.bind(this)
        this.setActiveTab = this.setActiveTab.bind(this)
        this.setActiveMethod = this.setActiveMethod.bind(this)
        this.setQuery = this.setQuery.bind(this)
        this.setData = this.setData.bind(this)
    }

    setQuery(q) {
        this.setState({ query: q })
    }

    setData(data){
        this.setState({data: data})
        this.props.setData(data)
    }

    setActiveTab(tab) {
        this.setState({ activeTab: tab })
    }

    setActiveMethod(method) {
        this.setState({ activeMethod: method })
        this.props.setRequestMethod(method);
    }

    setUrl(event) {
        this.setState({ url: event.target.value })
    }

    load() {
        axios({
            method: this.state.activeMethod,
            data: this.state.data,
            url: this.state.url,
        }).then(response => {
            this.setState({
                json: JSON.stringify(response.data, null, "\t")
            })
            this.props.setResponse(response)
            console.log(response)
        })

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
                    <input className="url-bar" placeholder="http://your-product/posts/1" value={this.state.url} onChange={this.setUrl} onKeyPress={(e) => {
                        if(e.keyCode = 13){
                            this.load()
                        }
                    }} />
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
                {/* <div className="pane-body"> */}
                <Body title={this.state.activeTab} response={this.props.response} setData={this.setData} />
                {/* </div> */}
            </div >
        )
    }
}



class Body extends React.Component {

    constructor() {
        super()
    }

    render() {
        const { response, title } = this.props
        var url = ""
        if (response != undefined && response.config != undefined) {
            url = response.config.url;
        }
        if (title === "Query") return <QueryPage url={url} namePlaceHolder="New Name" valuePlaceHolder="New Value" />
        else if (title === "Header") return (<HeaderPage url={url} namePlaceHolder="New Header" valuePlaceHolder="New Value" />)
        else if (title === "JSON") return (
            <div>
                <Editor id="main-pane-editor" value="" onChange={(e) => this.props.setData(e.target.value)} />
            </div>)
        else return <div></div>
    }
}


export default MainPane;