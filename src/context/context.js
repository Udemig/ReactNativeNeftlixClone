import {createContext, useState} from 'react';

const DataContext = createContext();

const DataProvider = ({children}) => {
  const [catIndex, setIndex] = useState('Çok Yakında');
  return (
    <DataContext.Provider value={{catIndex, setIndex}}>
      {children}
    </DataContext.Provider>
  );
};

export {DataContext, DataProvider};
