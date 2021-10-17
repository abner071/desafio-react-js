import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import api from '../services/api';

const DataContext = createContext([]);

function DataProvider({ children }){
  const [ servers, setServers ] = useState();
  const [ serversSelected, setServersSelected ] = useState([]);

  function handleSelectServer(add, server){
    if(server){
      if(add){
        setServersSelected([...serversSelected, server]);
      }else{
        const newServers = serversSelected.filter((item) => {
          return item.id_vm !== server.id_vm
        });

        setServersSelected(newServers);
      }
    }
  }

  useEffect(() => {
    async function loadServers(){
      const response = await api.get('/servers');
      
      if(response){
        setServers(response.data);
      }
    }

    loadServers();
  }, []);

  return (
    <DataContext.Provider value={{
      servers,
      serversSelected,
      handleSelectServer,
    }}>
      { children }
    </DataContext.Provider>
  )
}

function useData(){
  const context = useContext(DataContext);

  return context;
}

export { DataProvider, useData };