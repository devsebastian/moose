import React from 'react';
import './secondary-pane.css'
import Tabs from '../tabs/tabs';
import Editor from '../editor/editor'

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


    render() {
        return (
            <div className="pane secondary-pane">
                <div id="resizer-left" className="resizer resizer-left" onMouseDown={this.props.resizeHandler}></div>
                <div className="pane-header">
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
                headers.push(<div className="prop-row">
                    <div className="props-key">{key}</div>
                    <div className="props-value">{response.headers[key]}</div>
                </div>)
            }
            return (headers);
        } else if (title === "Cookie") {
            return <div>Dev</div>
        } else {
            return (<div></div>)

        }
    }
}

export default SecondaryPane;