import { useEffect, useMemo, useState } from 'react';
import moment from 'moment';
import { ApiItemType, ApiType, SelectNewsType } from '../types';
import ApiContext from './ApiContext';

type ContextProviderProps = {
  children: React.ReactNode;
};

function ApiContextProvider({ children }: ContextProviderProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [apiData, setApiData] = useState<ApiType>({} as ApiType);
  const [newsSelected, setNewsSelected] = useState<SelectNewsType>('recentes');
  const [styleSelected, setStyleSelected] = useState<boolean>(true);
  const [dataSelected, setDataSelected] = useState<ApiItemType[]>();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100');
      const data = await response.json();
      setApiData(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  useMemo(() => {
    const show = () => {
      if (newsSelected === 'recentes') {
        const recentes = apiData.items?.slice(1);
        setDataSelected(recentes);
      } else if (newsSelected === 'Release') {
        const release = apiData.items?.filter((item) => item.tipo === 'Release');
        setDataSelected(release);
      } else if (newsSelected === 'Notícia') {
        const noticias = apiData.items?.filter((item) => item.tipo === 'Notícia')
          .slice(1);
        setDataSelected(noticias);
      }
    };
    show();
  }, [newsSelected, apiData]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNewsSelected(value as SelectNewsType);
  };
  const toggleView = () => {
    setStyleSelected((prevState) => !prevState);
  };
  function dateToDays(data: string): string {
    const dataAtual = moment();
    const dataPassada = moment(data, 'DD/MM/YYYY HH:mm:ss');
    const diferencaEmDias = dataAtual.diff(dataPassada, 'days');
    if (diferencaEmDias === 0) return 'Hoje';
    return `${diferencaEmDias} dias atrás`;
  }
  const values = {
    loading,
    apiData,
    newsSelected,
    styleSelected,
    handleChange,
    toggleView,
    dataSelected,
    dateToDays,
  };

  return (
    <ApiContext.Provider value={ values }>
      {children}
    </ApiContext.Provider>
  );
}

export default ApiContextProvider;
