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
    "GET": "#8DCD59",
    "POST": "#5856A4",
    "PUT": "#ED5D92",
    "PATCH": "#FEBF2D",
    "DELETE": "#59B5E4",
    "OPTIONS": "#B36DDD",
    "HEAD": "#5856A4",
  }

  constructor() {
    super();
    this.state = {
      selectedTabIndex: 0,
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
    this.setProperty = this.setProperty.bind(this)

    this.setTab = this.setTab.bind(this);

  }

  setMethod(m) {
    this.setState({ method: m });
  }


  setProperty(props) {
    this.setState({ properties: props })
  }

  setTab() {
    this.setState({
      selectedPos: 1
    })
    alert("dev")
  }

  render() {
    return (
      <div className="main">
        <div className="pane-container">
          <SidePane resizeHandler={resize} colors={this.colors} setTab={this.setTab} selectedPos={this.state.selectedTabIndex} requests={this.state.requests} />
          <MainPane propertyHandler={this.setProperty} data={this.state} />
          <SecondaryPane properties={this.state.properties} resizeHandler={resize} />
        </div>
        <StatusBar />
      </div>
    );
  }
}

export default App;
