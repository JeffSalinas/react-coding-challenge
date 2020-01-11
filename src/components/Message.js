import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from '../ThemeContext';
import Button from '@material-ui/core/Button';

const Message = ({ message, columnID, orderIn, clearIndividual }) => {
  const { materialUI, classes } = useContext(ThemeContext);
  const [ shortMessage, setShortMessage ] = useState('');
  
  useEffect(() => {
    if (message.message.length > 18) {
      setShortMessage(message.message.substring(0, 17) + '...');
    } else {
      setShortMessage(message.message);
    }
  })

  return (
    <Button 
      id={orderIn}
      onClick={() => clearIndividual(orderIn) }
      className={columnID === 'type1' ? materialUI.errorMessages + ' errorMessages' :
        columnID === 'type2' ? materialUI.warningMessages + ' warningMessages' :
        materialUI.infoMessages + ' infoMessages'}
      style={{ margin: '0 10px' }}
      variant="contained">
        <p title={message.message} className={classes.messageText}>{shortMessage}</p>
        <p className={classes.messageText}>clear</p>
    </Button>
  );
}

export default Message;