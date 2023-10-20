import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import { renderWithRouter } from '../utils/renderWithRouter';
import App from '../App';
import ApiContextProvider from '../context/ApiContextProvider';
import ApiContext from '../context/ApiContext';
import news from './Mocks/news';

describe('Home component', () => {
  beforeEach(() => vi.clearAllMocks());

  test('renders the header', () => {
    renderWithRouter(
      <ApiContextProvider>
        <App />
      </ApiContextProvider>,
      { route: '/' },
    );
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });
  test('renders the Headline news', () => {
    const { debug } = renderWithRouter(
      <ApiContext.Provider
        value={ {
          loading: false,
          apiData: news,
          newsSelected: 'recentes',
          styleSelected: true,
          handleChange: () => {},
          toggleView: () => {},
          dataSelected: news.items,
          dateToDays: (str: string) => `Mocked ${str}`,
          favorites: [],
          setFavorites: () => {},
          handleClickFavorite: () => {},
        } }
      >
        <App />
      </ApiContext.Provider>,
      { route: '/' },
    );
    const recent = screen.getByText(/notícia mais recente/i);
    const recentnew = screen.getByRole('heading', { level: 1, name: /ibge atende mais de 40 prefeituras no primeiro dia da caravana federativa/i });
    expect(recent).toBeInTheDocument();
    expect(recentnew).toBeInTheDocument();
    debug();
  });
});
