import React, { createContext, useContext, useState } from 'react';

const resultContext = createContext();

export const useResult = () => useContext(resultContext);

const ResultProvider = ({ children }) => {
  const totalQuiz = 10;
  const [correct, setCorrect] = useState(0);
  const [isResultReady, setIsResultReady] = useState(false);

  const resultHandler = (count) => {
    setCorrect(count)
  }

  const displayResultHandler = (param) => {
    setIsResultReady(param)
  }
  
  return (
    <resultContext.Provider value={{ 
      totalQuiz, 
      correct, 
      setCorrect:resultHandler, 
      isResultReady, 
      setIsResultReady:displayResultHandler
      }}>
      {children}
    </resultContext.Provider>
  );
};

export default ResultProvider;