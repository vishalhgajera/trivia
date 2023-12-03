import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();

export const useResult = () => useContext(ResultContext);

const ResultProvider = ({ children }) => {
  const totalQuiz = 10;
  const [correct, setCorrect] = useState(0);

  const resultHandler = (count) => {
    setCorrect(count)
  }
  
  return (
    <ResultContext.Provider value={{ totalQuiz, correct, setCorrect:resultHandler }}>
      {children}
    </ResultContext.Provider>
  );
};

export default ResultProvider;