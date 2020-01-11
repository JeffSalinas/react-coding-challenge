import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Api from '../api';
import Table from './Table';

class MessageList extends Component {
  constructor(...args) {
    super(...args)
    this.state = {
      messages: [],
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
    this.setState({
      messages: [
        ...messages.slice(),
        message,
      ],
    }, () => {
      // Included to support initial direction. Please remove upon completion
      console.log(messages)
    })
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
        onClick={() => { console.log('click!'); }}>
          Clear
      </Button>
    );
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
        />
      </>
    );
  }
};

export default MessageList
