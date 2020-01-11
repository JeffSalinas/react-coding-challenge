import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from '../ThemeContext';
import Button from '@material-ui/core/Button';

const ErrorMessage = ({ message, clearIndividual }) => {
  const { materialUI, classes } = useContext(ThemeContext);
  const [shortMessage, setShortMessage] = useState('');

  useEffect(() => {
    if (message.message.length > 18) {
      setShortMessage(message.message.substring(0, 17) + '...');
    } else {
      setShortMessage(message.message);
    }
  }, [message.message])

  return (
    <Button
      className={materialUI.errorMessages + ' errorMessages'}
      variant="contained"
      onClick={() => clearIndividual('newError')}
      >
      <p title={message.message} className={classes.messageText}>{shortMessage}</p>
      <p className={classes.messageText}>Clear</p>
    </Button>
  );
}

export default ErrorMessage;