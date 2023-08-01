import {createContext, useState} from 'react';

const DataContext = createContext();

const DataProvider = ({children}) => {
  const [catIndex, setIndex] = useState({
    name:'Çok Yakında',
    url:'upcoming'
  });

  const[search,setSearch]=useState('')
  const[searchedMovie,setSearchedMovie]=useState('')
  return (
    <DataContext.Provider value={{catIndex, setIndex,search,setSearch,searchedMovie,setSearchedMovie}}>
      {children}
    </DataContext.Provider>
  );
};

export {DataContext, DataProvider};
