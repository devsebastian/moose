import React from 'react';
import SidePane from '../side-pane/side-pane'
import './app.css'
import MainPane from '../main-pane/main-pane';
import SecondaryPane from '../secondary-pane/secondary-pane';
import StatusBar from '../status-bar/status-bar';

function resize(e) {
  e.preventDefault();
  window.addEventListener('mousemove', e.target.id === "resizer-right" ? changeWidthRight : changeWidthLeft)
  window.addEventListener('mouseup', e.target.id === "resizer-right" ? stopResizeRight : stopResizeLeft)
}

function changeWidthRight(e) {
  var target = document.getElementsByClassName("side-pane")[0];
  var width = e.pageX - target.getBoundingClientRect().left + 'px';
  target.style.width = width;
}

function changeWidthLeft(e) {
  var target = document.getElementsByClassName("secondary-pane")[0];
  var width = target.getBoundingClientRect().right - e.pageX + 'px';
  target.style.width = width;
}

function stopResizeRight(e) {
  window.removeEventListener('mousemove', changeWidthRight)
}

function stopResizeLeft(e) {
  window.removeEventListener('mousemove', changeWidthLeft)
}

class App extends React.Component {

  colors = {
    "GET": "#ac84d1 ",
    "POST": "#77a7a2    ",
    "PUT": "#d37769    ",
    "PATCH": "#FEBF2D",
    "DELETE": "#c65568",
    "OPTIONS": "#B36DDD",
    "HEAD": "#5856A4",
  }

  constructor() {
    super();
    this.state = {
      selectedTabIndex: 0,
      response: "",
      requests: [{
        "title": "News API",
        "method": "POST",
        "url": "google.com",
      }, {
        "title": "Mongoose",
        "method": "GET",
        "url": "google.com",
      }, {
        "title": "Moose API",
        "method": "PATCH",
        "url": "google.com",
      }]

    }

    this.setMethod = this.setMethod.bind(this)
    this.setResponse = this.setResponse.bind(this)
  }

  setMethod(m) {
    this.setState({ method: m });
  }

  setResponse(res) {
    this.setState({ response: res })
  }

  render() {
    return (
      <div className="main">
        <div className="pane-container">
          <SidePane resizeHandler={resize} colors={this.colors} selectedPos={this.state.selectedTabIndex} requests={this.state.requests} />
          <MainPane
            setResponse={this.setResponse}
            data={this.state} />
          <SecondaryPane
            response={this.state.response}
            resizeHandler={resize} />
        </div>
        <StatusBar />
      </div>
    );
  }
}

export default App;
