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
                    </div>
                }

            />
        )
    }
}

export default CreateNewRequestDialog;