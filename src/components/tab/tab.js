import * as React from 'react'
import './tab.css'

function Tab(props) {
    return (
        <div onClick={() => props.setActiveTab(props.id)} key={props.id} className={props.disabled ? "tab tab--disabled" : props.selected ? "tab tab--selected" : "tab"}>
            {props.title}
        </div>
    )
}

export default Tab;