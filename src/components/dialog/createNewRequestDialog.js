import * as React from 'react'
import Dialog from './dialog';
import SelectButton from '../select-button/select-btn'

class CreateNewRequestDialog extends React.Component {

    constructor() {
        super()
        this.state = {
            activeMethod: "",
            title: ""
        }
        this.setActiveMethod = this.setActiveMethod.bind(this)
        this.setTitle = this.setTitle.bind(this)
    }

    setActiveMethod(method) {
        this.setState({ activeMethod: method })
    }

    setTitle(title) {
        this.setState({ title: title })
    }

    createButtonClickHandler() {
        if (this.state.title == undefined || this.state.title.length == 0) {
            alert("Please Enter a valid request name")
        } else {
            this.props.addNewRequest(this.state.title, this.state.activeMethod)
            this.props.closeDialog();
        }
    }

    render() {
        return (
            <Dialog
                title="Create new Request"
                buttons={[
                    { title: "cancel", id: "cancel", onClick: this.props.closeDialog },
                    { title: "create", id: "create", onClick: (e) => this.createButtonClickHandler() }
                ]}
                height={200}
                body={
                    <div className="dialog-pane">
                        <input placeholder="My Request" style={{ textTransform: "capitalize" }} className="dialog-input" onChange={(e) => this.setTitle(e.target.value)} />
                        <SelectButton
                            setActiveMethod={this.setActiveMethod}
                            right={12}
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
                    </div>
                }

            />
        )
    }
}

export default CreateNewRequestDialog;