import React, { useState, useEffect, useContext } from 'react';
import MessageColumn from './MessageColumn';
import ThemeContext from '../ThemeContext';

const Table = ({ allMessages }) => {
  const { classes } = useContext(ThemeContext);
  const [errors, setErrors] = useState([{ message: 'asdf', priority: 1 }]);
  const [warnings, setWarnings] = useState([{ message: 'asdfasdf', priority: 2 }]);
  const [infos, setInfos] = useState([{ message: 'asasdf', priority: 3 }]);
  window.test = {};

  useEffect(() => {
    //sort messages
  })

  return (
    <>
      <div className={classes.columnContainer}>
        <MessageColumn 
          columnID="type1"   
          codeType="Error Type 1"
          messages={errors}
          count={errors.length}
        />
        <MessageColumn 
          columnID="type2" 
          codeType="Warning Type 2" 
          messages={warnings}
          count={warnings.length}
        />
        <MessageColumn 
          columnID="type3" 
          codeType="Info Type 3"
          messages={infos}
          count={infos.length}
        />
      </div>
    </>
  );
}

export default Table;