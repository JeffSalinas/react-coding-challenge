import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Api from '../api';
import Table from './Table';

class MessageList extends Component {
  constructor(...args) {
    super(...args)
    this.state = {
      messages: [],
      orderIn: 0
    }
  }

  api = new Api({
    messageCallback: (message) => {
      this.messageCallback(message)
    },
  })

  componentDidMount() {
    this.api.start()
  }

  messageCallback(message) {
    const { messages } = this.state
    message.orderIn = this.state.orderIn;
  
    this.setState({
      messages: [
        ...messages.slice(),
        message,
      ],
      orderIn: this.state.orderIn + 1
    });
  }

  renderButton() {
    const isApiStarted = this.api.isStarted()
    return (
      <Button
        id="start-stop-messages-button"
        style={{ margin: '0 10px' }}
        variant="contained"
        onClick={() => {
          if (isApiStarted) {
            this.api.stop()
          } else {
            this.api.start()
          }
          this.forceUpdate()
        }}
      >
        {isApiStarted ? 'Stop Messages' : 'Start Messages'}
      </Button>
    );
  }

  clearButton() {

    return (
      <Button 
        id="clear-messages-button" 
        style={{margin: '0 10px'}}
        variant="contained" 
        onClick={() => { this.setState({ messages: [], orderIn: 0}) }}>
          Clear
      </Button>
    );
  }

  clearIndividual(orderIn) {
    let messagesCopy = this.state.messages.slice();

    for(let i = 0; i < messagesCopy.length; i++) {
      if(messagesCopy[i].orderIn == orderIn) {
        messagesCopy.splice(i, 1);
        break;
      }
    }

    this.setState({messages: messagesCopy});
  }

  render() {
    return (
      <>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          margin: '0 0 20px 0'}}>
        {this.renderButton()}
        {this.clearButton()}
      </div>
        <Table 
          allMessages={this.state.messages} 
          clearIndividual={this.clearIndividual.bind(this)}
        />
      </>
    );
  }
};

export default MessageList
