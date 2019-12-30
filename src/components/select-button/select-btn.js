import * as React from 'react'
import './select-btn.css'

class SelectButton extends React.Component {

    constructor() {
        super()
        this.state = {
            openDialog: false,
            activeMethod: "",
        }
        this.openDialog = this.openDialog.bind(this)
        this.setActiveMethod = this.setActiveMethod.bind(this)
    }

    setActiveMethod(e) {
        var val = e.target.innerHTML
        this.setState({
            activeMethod: val
        })
        this.props.setActiveMethod(val);
        this.openDialog()
    }

    componentDidMount() {
        this.openDialog();
        this.setActiveMethod({
            target: {
                innerHTML: this.props.values[0].title
            }
        })
    }

    openDialog() {
        this.setState((oldState) =>
            ({ openDialog: !oldState.openDialog })
        )
    }

    render() {
        const { values } = this.props
        return (
            <div className="select-btn-container">
                <div class="select-btn" onClick={this.openDialog}>
                    {this.state.activeMethod}
                </div>
                {(this.state.openDialog) ?
                    <div className="select-btn-context-menu"
                        style={{
                            right: this.props.right,
                            left: this.props.left
                        }}>
                        {values.map(token => <div onClick={this.setActiveMethod} className="select-btn-option" key={token.id}>{token.title}</div>)}
                    </div> : <div></div>
                }
            </div>
        )
    }

}

export default SelectButton