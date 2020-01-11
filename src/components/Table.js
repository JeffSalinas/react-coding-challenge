import React, { useState, useEffect } from 'react';
import MessageColumn from './MessageColumn';

const Table = ({ allMessages }) => {
  const [ errors, setErrors ] = useState([]);
  const [ warnings, setWarnings ] = useState([]);
  const [ infos, setInfos ] = useState([]);

  useEffect(() => {
    //sort messages
  })

  return (
    <>
      <div>
        <MessageColumn 
          columnID="type1"   
          codeType="Error"
          messages={errors}
        />
        <MessageColumn 
          columnID="type2" 
          codeType="Warning" 
          messages={warnings}
        />
        <MessageColumn 
          columnID="type3" 
          codeType="Info"
          messages={infos}
        />
      </div>
    </>
  );
}

export default Table;