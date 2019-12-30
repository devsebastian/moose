import * as React from 'react'
import './dialog.css'
import SelectButton from '../select-button/select-btn';

function Dialog(props) {
    return (
        <div className="dialog-container">
            <div className="dialog" style={{height: props.height}}>
                <div className="dialog-header">
                    {props.title}
                </div>
                <div className="dialog-body">
                    {props.body}
                </div>
                <div className="dialog-footer">
                    {props.buttons == undefined ? <div></div> : props.buttons.map((button) => <div className="dialog-button" key={button.id} onClick={button.onClick}>{button.title}</div>)}
                </div>
            </div>
        </div>
    )
}

export default Dialog;