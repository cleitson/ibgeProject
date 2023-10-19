import { useContext } from 'react';
import ApiContext from '../../context/ApiContext';
import style from './CardsNews.module.css';
import BtnLerNoticia from '../BtnLerNoticia/BtnLerNoticia';

const URL = 'https://agenciadenoticias.ibge.gov.br';

function CardsNews() {
  const { dataSelected, styleSelected, dateToDays } = useContext(ApiContext);

  return (
    <>
      { styleSelected ? (
        <section className={ style.cardsContainerTrue }>
          { dataSelected?.map((item) => (
            <div key={ item.id } className={ style.cardItem }>
              <h2>{ item.titulo }</h2>
              <p>{ item.introducao }</p>
              <div className={ style.infos }>
                <span>{ dateToDays(item.data_publicacao) }</span>
                <BtnLerNoticia link={ item.link } />
              </div>
            </div>
          )) }
        </section>
      ) : (
        <section className={ style.cardsContainerTrue }>
          { dataSelected?.map((item) => (
            <div key={ item.id } className={ style.cardItemList }>
              <img
                src={ `${URL}/${JSON.parse(item.imagens).image_intro}` }
                alt={ item.titulo }
                width={ 200 }
              />
              <div>

                <h2>{ item.titulo }</h2>
                <p>{ item.introducao }</p>
                <div className={ style.infos }>
                  <span>{ dateToDays(item.data_publicacao) }</span>
                  <BtnLerNoticia link={ item.link } />
                </div>
              </div>
            </div>
          )) }
        </section>
      )}
      { !dataSelected && (<p>Loading...</p>) }
    </>
  );
}

export default CardsNews;
