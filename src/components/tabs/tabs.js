import React from 'react';
import './tabs.css'
import Tab from '../tab/tab';


class 
Tabs extends React.Component {

    constructor() {
        super()
        this.state = {
            activeTab: ""
        }

        this.setActiveTab = this.setActiveTab.bind(this)
    }

    setActiveTab(tab) {
        this.props.setActiveTab(tab)
        this.setState({ activeTab: tab })
    }

    componentDidMount() {
        this.setState({ activeTab: this.props.tabs[0].id })
        this.setActiveTab(this.props.tabs[0].id)
    }

    render() {
        return (
            <div className="tabs" >
                {this.props.tabs.map(tab =>
                    <Tab
                        title={tab.title}
                        id={tab.id}
                        selected={this.state.activeTab == tab.id ? true : false}
                        disabled={tab.disabled}
                        setActiveTab={this.setActiveTab} />)}
                <div className="tab-spacer"></div>
            </div >
        )
    }
}

export default Tabs;