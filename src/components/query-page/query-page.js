import React from 'react';
import './query-page.css'
import drag from '../../assets/drag.png'
import QueryBox from './query-box'

class QueryPage extends React.Component {

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
                        valuePlaceHolder={this.props.namePlaceHolder}
                        namePlaceHolder={this.props.namePlaceHolder}
                        name={this.state.queries[pos].name}
                        value={this.state.queries[pos].value} />)}
            </div>
        )
    }

    // setUrl() {
    //     if (this.props.url != undefined && this.props.url.length > 0) {
    //         var val = this.props.url + "?";
    //         var queries = [];
    //         for (var query of this.state.queries) {
    //             if ((query.name != undefined && query.name.length > 0) || (query.value != undefined && query.value.length > 0))
    //                 queries.push(query.name + "=" + query.value);
    //         }
    //         this.setState({ url: val + queries.join("&") })
    //     }
    // }

    setUrl(q) {
        var queries = []
        if (this.props.url != undefined && this.props.url.length > 0) {
            var val = this.props.url + "?";
            console.log(val);
            for (var query of q) {
                if ((query.name != undefined && query.name.length > 0) || (query.value != undefined && query.value.length > 0)){
                    queries.push(query.name + "=" + query.value);
                }
            }
            this.setState({ url: val + queries.join("&") })
        }
    }

    deleteQueryAt(pos) {
        this.setState(oldState => {
            var queries = oldState.queries;
            if (pos === 0 && oldState.queries.length == 1) {
                queries = [{ name: "", value: "" }]
            } else {
                queries.splice(pos, 1);
            }
            return { queries: queries }
        })
    }

    addQuery() {
        this.setState(oldState => { return { queries: [...oldState.queries, { name: "", value: "" }] } })
    }

    onQueryNameChange({ value, pos }) {
        if (value != undefined && value.length >= 0) {
            this.setState(oldState => {
                var queries = oldState.queries;
                queries[pos].name = value;
                this.setUrl([...queries])
                return { queries: queries }
            })

            if (this.state.queries.length === pos + 1) {
                this.addQuery();
            }
        }
    }


    onQueryValueChange({ value, pos }) {
        if (value != undefined && value.length >= 0) {
            this.setState(oldState => {
                var queries = oldState.queries;
                queries[pos].value = value;
                this.setUrl([...queries]);
                return { queries: queries }
            })
        }

        if (this.state.queries.length === pos + 1) {
            this.addQuery();
        }
    }
}

export default QueryPage;