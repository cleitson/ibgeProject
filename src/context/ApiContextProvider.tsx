import { useEffect, useState } from 'react';
import { ApiType } from '../types';
import ApiContext from './ApiContext';

type ContextProviderProps = {
  children: React.ReactNode;
};

function ApiContextProvider({ children }: ContextProviderProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [apiData, setApiData] = useState<ApiType>({} as ApiType);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100');
      const data = await response.json();
      console.log(data);
      setApiData(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const values = {
    loading,
    apiData,
  };

  return (
    <ApiContext.Provider value={ values }>
      {children}
    </ApiContext.Provider>
  );
}

export default ApiContextProvider;
