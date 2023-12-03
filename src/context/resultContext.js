import React, { createContext, useContext, useState } from 'react';

const resultContext = createContext();

export const useResult = () => useContext(resultContext);

const ResultProvider = ({ children }) => {
  const totalQuiz = 10;
  const [correct, setCorrect] = useState(0);

  const resultHandler = (count) => {
    setCorrect(count)
  }
  
  return (
    <resultContext.Provider value={{ totalQuiz, correct, setCorrect:resultHandler }}>
      {children}
    </resultContext.Provider>
  );
};

export default ResultProvider;