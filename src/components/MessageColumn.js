import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext';

const MessageColumn = ({ columnID }) => {
  const { classes } = useContext(ThemeContext);

  return (
    <div id={columnID} className={classes.columnContainer}>
      hello!
    </div>
  );
};

export default MessageColumn;