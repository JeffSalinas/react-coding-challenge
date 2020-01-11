import React from 'react';
import ThemeContext from './ThemeContext';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  columnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  messagesContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 10px'
  },
  columnTitle: {
    alignSelf: 'flexStart',
    margin: '0',
    fontWeight: 'bold'
  },
  count: {
    alignSelf: 'flexStart',
    margin: '0',
  }
});

const GlobalTheme = (props) => {
  const makeStyles = useStyles();

  return (
    <ThemeContext.Provider value={{
      classes: makeStyles
    }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default GlobalTheme;