import React from 'react';
import ThemeContext from './ThemeContext';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  columnContainer: {
    color: 'red'
  }
})

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