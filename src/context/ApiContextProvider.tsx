import { useEffect, useMemo, useState } from 'react';
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
  const [favorites, setFavorites] = useState<ApiItemType[]>([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100');
      const data = await response.json();
      setApiData(data);
      setLoading(false);
    }
    fetchData();
    const storage = JSON.parse(localStorage.getItem('favoriteNews') || '[]');
    setFavorites(storage);
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
      } else if (newsSelected === 'favoritas') {
        setDataSelected(favorites);
      }
    };
    show();
  }, [newsSelected, apiData, favorites]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNewsSelected(value as SelectNewsType);
  };
  const toggleView = () => {
    setStyleSelected((prevState) => !prevState);
  };

  const handleClickFavorite = (news: ApiItemType) => {
    const newsExists = favorites.find((favorite) => favorite.id === news.id);
    if (!newsExists) {
      setFavorites([...favorites, news]);
      localStorage.setItem('favoriteNews', JSON.stringify([...favorites, news]));
    } else {
      const newsRemove = favorites.filter((favorite) => favorite.id !== news.id);
      setFavorites(newsRemove);
      localStorage.setItem('favoriteNews', JSON.stringify(newsRemove));
    }
  };

  const values = {
    loading,
    apiData,
    newsSelected,
    styleSelected,
    handleChange,
    toggleView,
    dataSelected,
    favorites,
    setFavorites,
    handleClickFavorite,
  };

  return (
    <ApiContext.Provider value={ values }>
      {children}
    </ApiContext.Provider>
  );
}

export default ApiContextProvider;
