import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext';
import Button from '@material-ui/core/Button';

const Message = ({ message, columnID }) => {
  const { materialUI } = useContext(ThemeContext);

  return (
    <Button 
      className={columnID === 'type1' ? materialUI.errorMessages : columnID === 'type2' ? materialUI.warningMessages : materialUI.infoMessages }
      style={{ margin: '0 10px' }}
      variant="contained">
        <p>{message.message}</p>
        <p>clear</p>
    </Button>
  );
}

export default Message;