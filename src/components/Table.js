import React, { useState, useEffect, useContext } from 'react';
import MessageColumn from './MessageColumn';
import ThemeContext from '../ThemeContext';

const Table = ({ allMessages, clearIndividual }) => {
  const { classes } = useContext(ThemeContext);
  const [errors, setErrors] = useState([{ message: '', priority: 1, orderIn: 0 }]);
  const [warnings, setWarnings] = useState([{ message: 'asdfasdf', priority: 2, orderIn: 0 }]);
  const [infos, setInfos] = useState([{ message: 'asasdf', priority: 3, orderIn: 0 }]);
  window.test = {};
  window.totalMessages = allMessages.length;

  useEffect(() => {
    let tempError = [];
    let tempWarning = [];
    let tempInfo = [];
    let tempAllMessages = allMessages.slice();

    tempAllMessages.sort((a, b) => {
      return b.orderIn - a.orderIn;
    })

    tempAllMessages.forEach(el => {
      if(el.priority === 1) tempError.push(el); 
      if(el.priority === 2) tempWarning.push(el); 
      if(el.priority === 3) tempInfo.push(el);
    })

    setErrors(tempError);
    setWarnings(tempWarning);
    setInfos(tempInfo);
  }, [allMessages])

  return (
    <>
      <div className={classes.columnContainer}>
        <MessageColumn 
          columnID="type1"   
          codeType="Error Type 1"
          messages={errors}
          count={errors.length}
          clearIndividual={clearIndividual}
        />
        <MessageColumn 
          columnID="type2" 
          codeType="Warning Type 2" 
          messages={warnings}
          count={warnings.length}
          clearIndividual={clearIndividual}
        />
        <MessageColumn 
          columnID="type3" 
          codeType="Info Type 3"
          messages={infos}
          count={infos.length}
          clearIndividual={clearIndividual}
        />
      </div>
    </>
  );
}

export default Table;