import { useContext } from 'react';
import styleSvg from '../../assets/styleSvg.svg';
import ApiContext from '../../context/ApiContext';

function SelectNews() {
  const {
    newsSelected,
    handleChange,
    toggleView,
  } = useContext(ApiContext);

  return (
    <section>
      <div>
        <div>
          <input
            type="checkbox"
            name="recentes"
            id="recentes"
            value="recentes"
            checked={ newsSelected === 'recentes' }
            onChange={ handleChange }
          />
          <label htmlFor="recentes">Mais recentes</label>
          <input
            type="checkbox"
            name="release"
            id="release"
            value="Release"
            checked={ newsSelected === 'Release' }
            onChange={ handleChange }
          />
          <label htmlFor="release">Release</label>
          <input
            type="checkbox"
            name="noticias"
            id="noticias"
            value="Notícia"
            checked={ newsSelected === 'Notícia' }
            onChange={ handleChange }
          />
          <label htmlFor="noticias">Noticias</label>
          <input
            type="checkbox"
            name="favoritas"
            id="favoritas"
            value="favoritas"
            checked={ newsSelected === 'favoritas' }
            onChange={ handleChange }
          />
          <label htmlFor="favoritas">Favoritas</label>
        </div>
        <button onClick={ toggleView }>
          <img src={ styleSvg } alt="trocar visual" />
        </button>
      </div>
    </section>
  );
}

export default SelectNews;
