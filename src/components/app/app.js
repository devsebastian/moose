import React from 'react';
import SidePane from '../side-pane/side-pane'
import './app.css'
import MainPane from '../main-pane/main-pane';
import SecondaryPane from '../secondary-pane/secondary-pane';
import StatusBar from '../status-bar/status-bar';
import Dialog from '../dialog/dialog';
import CreateNewRequestDialog from '../dialog/createNewRequestDialog';

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
      showNewRequestDialog: false,
      requests: [{
        title: "My Request",
        method: "GET"
      }]

    }

    this.setMethod = this.setMethod.bind(this)
    this.setResponse = this.setResponse.bind(this)
    this.addNewRequest = this.addNewRequest.bind(this)

    this.showNewRequestDialog = this.showNewRequestDialog.bind(this)
    this.closeNewRequestDialog = this.closeNewRequestDialog.bind(this)
    this.setSelectedTabIndex = this.setSelectedTabIndex.bind(this)
  }

  setSelectedTabIndex(index) {
    this.setState({ selectedTabIndex: index })
  }

  setMethod(m) {
    this.setState({ method: m });
  }

  setResponse(res) {
    console.log("setresponse called")

    this.setState(oldState => {
      var requests = oldState.requests
      console.log(requests[oldState.selectedTabIndex])

      requests[oldState.selectedTabIndex].response = res
      return { requests: requests }
    })

    console.log("setresponse end")

  }

  addNewRequest(title, method) {
    console.log("new request call recieved")
    this.setState((oldState) => ({
      requests: [...oldState.requests, {
        title: title,
        method: method
      }]
    }))

  }

  showNewRequestDialog() {
    this.setState({ showNewRequestDialog: true })
  }

  closeNewRequestDialog() {
    this.setState({
      showNewRequestDialog: false
    })
  }


  render() {
    return (
      <div className="main">
        <div className="pane-container">

          <SidePane
            showNewRequestDialog={this.showNewRequestDialog}
            resizeHandler={resize}
            colors={this.colors}
            setSelectedTabIndex={this.setSelectedTabIndex}
            selectedPos={this.state.selectedTabIndex}
            requests={this.state.requests} />
          <MainPane
            colors={this.colors}
            setResponse={this.setResponse}
            data={this.state} />
          <SecondaryPane
            response={this.state.requests[this.state.selectedTabIndex].response}
            resizeHandler={resize} />
        </div>
        <StatusBar />
        {this.state.showNewRequestDialog ?
          <CreateNewRequestDialog colors={this.colors}
            addNewRequest={this.addNewRequest}
            closeDialog={this.closeNewRequestDialog} />
          : <div></div>}
      </div>
    );
  }
}

export default App;
