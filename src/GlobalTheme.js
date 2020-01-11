import React from 'react';
import ThemeContext from './ThemeContext';
import { createUseStyles } from 'react-jss'
import { makeStyles } from '@material-ui/styles';

const useStyles = createUseStyles({
  columnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  messagesContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 10px',
    width: '260px'
  },
  columnTitle: {
    alignSelf: 'flexStart',
    margin: '0',
    fontWeight: 'bold'
  },
  count: {
    alignSelf: 'flexStart',
    margin: '0',
  },
  messageText: {
    margin: '0'
  }
});

const useMaterialUI = makeStyles({
  errorMessages: {
    backgroundColor: '#F56236 !important',
    margin: '5px 0 !important',
    width: '260px !important',
    height: '45px !important',
    display: 'flex !important',
    justifyContent: 'space-between !important',
    alignItems: 'flex-start !important',
  },
  warningMessages: {
    backgroundColor: '#FCE788 !important',
    margin: '5px 0 !important',
    width: '260px !important',
    height: '45px !important',
    display: 'flex !important',
    justifyContent: 'space-between !important',
    alignItems: 'flex-start !important',
  },
  infoMessages: {
    backgroundColor: '#88FCA3 !important',
    margin: '5px 0 !important',
    width: '260px !important',
    height: '45px !important',
    display: 'flex !important',
    justifyContent: 'space-between !important',
    alignItems: 'flex-start !important',
  }
});

const GlobalTheme = (props) => {
  const makeStyles = useStyles();
  const makeMaterialUI = useMaterialUI();

  return (
    <ThemeContext.Provider value={{
      classes: makeStyles,
      materialUI: makeMaterialUI
    }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default GlobalTheme;