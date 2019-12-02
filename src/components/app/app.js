import React from 'react';
import SidePane from '../side-pane/side-pane'
import './app.css'
import MainPane from '../main-pane/main-pane';
import SecondaryPane from '../secondary-pane/secondary-pane';

class App extends React.Component {

  colors = {
    "GET": "#00ff00",
    "POST": "#ff0000",
  }

  constructor() {
    super();
    this.state = {
      "requests": [{
        "title": "News API",
        "method": "POST",
        "url": "google.com",
      },{
        "title": "Mongoose",
        "method": "GET",
        "url": "google.com",
      },{
        "title": "Moose API",
        "method": "GET",
        "url": "google.com",
      }]
    }

    this.setMethod = this.setMethod.bind(this)
  }

  setMethod(m) {
    this.setState({ method: m });
  }



  render() {
    return (
      <div className="pane-container">
        <SidePane colors={this.colors} requests={this.state.requests} />
        <MainPane data={this.state} />
        <SecondaryPane />
      </div>
    );
  }
}

export default App;
