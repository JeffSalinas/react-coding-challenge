import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Api from '../api';
import Table from './Table';
import ErrorMessage from './ErrorMessage';

class MessageList extends Component {
  constructor(...args) {
    super(...args)
    this.state = {
      messages: [],
      orderIn: 0,
      currentError: false
    };
  }

  api = new Api({
    messageCallback: (message) => {
      this.messageCallback(message);
    }
  })

  componentDidMount() {
    this.api.start();
  }

  messageCallback(message) {
    const isError = message.priority === 1 ? true : false;
  
    if (isError) {
      this.handleNewError(message);
    } else {
      this.handleNewMessage(message);
    }
  }

  handleNewMessage(message) {
    const { messages } = this.state;
    message.orderIn = this.state.orderIn;

    this.setState({
      messages: [
        ...messages.slice(),
        message,
      ],
      orderIn: this.state.orderIn + 1
    });
  }

  handleNewError(message) {

    if(!this.state.currentError) {
      this.setState({currentError: message}, () => {
        this.removeIfSame(message.message);
      });
    } else {
      const { messages } = this.state
      let oldCurrentError = this.state.currentError;
      oldCurrentError.orderIn = this.state.orderIn;

      this.setState({
        messages: [
          ...messages.slice(),
          oldCurrentError,
        ],
        orderIn: this.state.orderIn + 1,
        currentError: message
      }, () => {
          this.removeIfSame(message.message);
      });
    }
  }

  removeIfSame(message) {
    setTimeout(() => {
      if (message === this.state.currentError.message) {
        const { messages } = this.state
        let currentError = this.state.currentError;
        currentError.orderIn = this.state.orderIn;

        this.setState({
          messages: [
            ...messages.slice(),
            currentError,
          ],
          orderIn: this.state.orderIn + 1,
          currentError: false
        })
      }
    }, 2000);
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
        onClick={() => { this.setState({ messages: [], orderIn: 0, currentError: false}) }}>
          Clear
      </Button>
    );
  }

  clearIndividual(orderIn) {
    let messagesCopy = this.state.messages.slice();

    if (orderIn === 'newError') {

      this.setState({currentError: false});
      return;
    }

    for (let i = 0; i < messagesCopy.length; i++) {
      if(messagesCopy[i].orderIn === Number(orderIn)) {
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
          flexDirection: 'column',
          alignItems: 'center',
        }}
        >
          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '55px', 
            width: '270px', 
            margin: '10px', 
            border: '1px solid #E0E0E0', 
            borderRadius: '5px'}}
          >
            {!!this.state.currentError && 
              <ErrorMessage 
                message={this.state.currentError}
                clearIndividual={this.clearIndividual.bind(this)}
              />}
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            margin: '0 0 20px 0'}}
          >
            {this.renderButton()}
            {this.clearButton()}
          </div>
          <Table 
            allMessages={this.state.messages} 
            clearIndividual={this.clearIndividual.bind(this)}
          />
        </div>
      </>
    );
  }
};

export default MessageList;
