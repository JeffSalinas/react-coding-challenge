import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext';

const Message = ({ message }) => {
  const { classes } = useContext(ThemeContext);

  return (
    <div>hello</div>
  );
}

export default Message;