import { useContext, useState } from 'react';
import ApiContext from '../../context/ApiContext';
import BtnLerNoticia from '../BtnLerNoticia/BtnLerNoticia';
import IsFavorite from '../IsFavorite.tsx/IsFavorite';

const URL = 'https://agenciadenoticias.ibge.gov.br';

function CardsNews() {
  const { dataSelected, styleSelected, dateToDays } = useContext(ApiContext);
  const [btnMore, setBtnMore] = useState(true);

  const showMoreItens = () => {
    setBtnMore((prev) => !prev);
  };

  const data = btnMore ? dataSelected?.slice(0, 6) : dataSelected;

  return (
    <section>
      { styleSelected ? (
        <section>
          { data?.map((item) => (
            <div key={ item.id }>
              <h2>{ item.titulo }</h2>
              <p>{ item.introducao }</p>
              <div>
                <span>{ dateToDays(item.data_publicacao) }</span>
                <BtnLerNoticia link={ item.link } />
              </div>
              <div>
                <IsFavorite idNews={ item } />
              </div>
            </div>
          )) }
        </section>
      ) : (
        <section>
          { data?.map((item) => (
            <div key={ item.id }>
              <img
                src={ `${URL}/${JSON.parse(item.imagens).image_intro}` }
                alt={ item.titulo }
                width={ 300 }
              />
              <div>
                <div>
                  <div>
                    <h2>{ item.titulo }</h2>
                  </div>
                  <IsFavorite idNews={ item } />
                </div>
                <p>{ item.introducao }</p>
                <div>
                  <span>{ dateToDays(item.data_publicacao) }</span>
                  <BtnLerNoticia link={ item.link } />
                </div>
              </div>
            </div>
          )) }
        </section>
      )}
      <button onClick={ showMoreItens }>
        <p>{ btnMore ? 'mais noticias' : 'Mostrar menos' }</p>
      </button>
      { !dataSelected && (<p>Loading...</p>) }
    </section>
  );
}

export default CardsNews;
