import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext';
import Message from './Message.js';

const MessageColumn = ({ codeType, columnID, count, messages }) => {
  const { classes } = useContext(ThemeContext);

  return (
    <div id={columnID} className={classes.messagesContainer}>
      <p className={classes.columnTitle}>{codeType}</p>
      <p className={classes.count}>{'Count ' + count}</p>
      {messages.map((el, index) => {
        return (
          <Message key={index} message={el} />
        );
      })}
    </div>
  );
};

export default MessageColumn;