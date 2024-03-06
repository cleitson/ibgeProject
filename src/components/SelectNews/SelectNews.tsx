import { useContext } from 'react';
import styleSvg from '../../assets/styleSvg.svg';
import ApiContext from '../../context/ApiContext';

function SelectNews() {
  const {
    newsSelected,
    handleChange,
    toggleView,
  } = useContext(ApiContext);
  const selected = 'border-b-2 border-red-500';
  return (
    <section className="flex justify-center items-center mb-12">
      <div className="flex justify-between bg-white md:w-4/5 pr-4">
        <div className="flex justify-start items-center w-4/5 h-[50px] gap-5 pl-5">
          <input
            type="checkbox"
            name="recentes"
            id="recentes"
            value="recentes"
            checked={ newsSelected === 'recentes' }
            onChange={ handleChange }
            className="hidden"
          />
          <label
            htmlFor="recentes"
            className={ `cursor-pointer ${
              newsSelected === 'recentes' ? `${selected}` : ''
            }` }
          >
            Mais recentes
          </label>
          <input
            type="checkbox"
            name="release"
            id="release"
            value="Release"
            checked={ newsSelected === 'Release' }
            onChange={ handleChange }
            className="hidden"
          />
          <label
            htmlFor="release"
            className={ `cursor-pointer ${
              newsSelected === 'Release' ? `${selected}` : ''
            }` }
          >
            Release
          </label>
          <input
            type="checkbox"
            name="noticias"
            id="noticias"
            value="Notícia"
            checked={ newsSelected === 'Notícia' }
            onChange={ handleChange }
            className="hidden"
          />
          <label
            htmlFor="noticias"
            className={ `cursor-pointer ${
              newsSelected === 'Notícia' ? `${selected}` : ''
            }` }
          >
            Noticias
          </label>
          <input
            type="checkbox"
            name="favoritas"
            id="favoritas"
            value="favoritas"
            checked={ newsSelected === 'favoritas' }
            onChange={ handleChange }
            className="hidden"
          />
          <label
            htmlFor="favoritas"
            className={ `cursor-pointer ${
              newsSelected === 'favoritas' ? `${selected}` : ''
            }` }
          >
            Favoritas
          </label>
        </div>
        <button onClick={ toggleView }>
          <img src={ styleSvg } alt="trocar visual" />
        </button>
      </div>
    </section>
  );
}

export default SelectNews;
