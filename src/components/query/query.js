import React from 'react';
import './query.css'
import drag from '../../assets/drag.png'

class Query extends React.Component {

    constructor() {
        super()
        this.state = {
            url: "",
            queries: [
                {
                    name: "",
                    value: ""
                }
            ]
        }

        this.onQueryNameChange = this.onQueryNameChange.bind(this);
        this.onQueryValueChange = this.onQueryValueChange.bind(this);
        this.addQuery = this.addQuery.bind(this);
        this.deleteQueryAt = this.deleteQueryAt.bind(this);
    }

    componentDidMount() {
        this.setState({ url: this.props.url })
    }


    render() {
        return (
            <div className="query-body">
                <p>URL PREVIEW</p>
                <div className="url-preview-box">{this.state.url.length > 0 ? this.state.url : "```"}</div>
                {this.state.queries.map((query, pos) =>
                    <QueryBox
                        onQueryNameChange={this.onQueryNameChange}
                        onQueryValueChange={this.onQueryValueChange}
                        deleteQueryAt={this.deleteQueryAt}
                        key={pos}
                        pos={pos}
                        name={this.state.queries[pos].name} />)}
            </div>
        )
    }

    setUrl() {
        if (this.props.url != undefined && this.props.url.length > 0) {
            var val = this.props.url + "?";
            var queries = [];
            for (var query of this.state.queries) {
                if ((query.name != undefined && query.name.length > 0) || (query.value != undefined && query.value.length > 0))
                    queries.push(query.name + "=" + query.value);
            }
            this.setState({ url: val + queries.join("&") })
        }
    }

    deleteQueryAt(pos) {
        this.setState(oldState => {
            var queries = oldState.queries;
            if (pos === 0) {
                queries = [{ name: "", value: "" }]
            } else {
                queries.splice(pos, 1);
            }
            console.log(queries);
            return { queries: queries }
        })
    }

    addQuery() {
        this.setState(oldState => { return { queries: [...oldState.queries, { name: "", value: "" }] } })
    }

    onQueryNameChange({ value, pos }) {
        if (value != undefined && value.length > 0) {
            this.setState(oldState => {
                var queries = oldState.queries;
                queries[pos].name = value;
                return { queries: queries }
            })

            if (this.state.queries.length === pos + 1) {
                this.addQuery();
            }
        }
        this.setUrl()
    }


    onQueryValueChange({ value, pos }) {
        if (value != undefined && value.length > 0) {
            this.setState(oldState => {
                var queries = oldState.queries;
                queries[pos].value = value;
                return { queries: queries }
            })
        }
        this.setUrl();
    }
}

function QueryBox({ name, pos, onQueryNameChange, onQueryValueChange, deleteQueryAt }) {
    return (
        <div className="new-query-box">
            <svg xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path fill="var(--text-tertiary)" d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
            <input className="query-name" placeholder="New Name" onKeyUp={(e) => onQueryNameChange({ pos: pos, value: e.target.value })}></input>
            <input className="query-value" placeholder="New Value" onKeyUp={(e) => onQueryValueChange({ pos: pos, value: e.target.value })}></input>
            <svg onClick={() => deleteQueryAt(pos)} width="16" height="16" viewBox="0 0 24 24">
                <path fill="currentColor" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
            </svg>
        </div>)
}
export default Query;