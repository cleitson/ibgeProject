import { useContext, useState } from 'react';
import ApiContext from '../../context/ApiContext';
import style from './CardsNews.module.css';
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
    <section className={ style.cardNews }>
      { styleSelected ? (
        <section className={ style.cardsContainerTrue }>
          { data?.map((item) => (
            <div key={ item.id } className={ style.cardItem }>
              <h2 className={ style.title }>{ item.titulo }</h2>
              <p className={ style.paragraph }>{ item.introducao }</p>
              <div className={ style.infos }>
                <span>{ dateToDays(item.data_publicacao) }</span>
                <BtnLerNoticia link={ item.link } />
              </div>
              <div className={ style.iconFavorite }>
                <IsFavorite idNews={ item } />
              </div>
            </div>
          )) }
        </section>
      ) : (
        <section className={ style.cardsContainerTrue }>
          { data?.map((item) => (
            <div key={ item.id } className={ style.cardItemList }>
              <img
                src={ `${URL}/${JSON.parse(item.imagens).image_intro}` }
                alt={ item.titulo }
                width={ 300 }
              />
              <div>
                <div className={ style.iconFavoriteList }>
                  <div>
                    <h2 className={ style.title }>{ item.titulo }</h2>
                  </div>
                  <IsFavorite idNews={ item } />
                </div>
                <p className={ style.paragraph }>{ item.introducao }</p>
                <div className={ style.infos }>
                  <span>{ dateToDays(item.data_publicacao) }</span>
                  <BtnLerNoticia link={ item.link } />
                </div>
              </div>
            </div>
          )) }
        </section>
      )}
      <button onClick={ showMoreItens } className={ style.buttonMore }>
        <p>{ btnMore ? 'mais noticias' : 'Mostrar menos' }</p>
      </button>
      { !dataSelected && (<p>Loading...</p>) }
    </section>
  );
}

export default CardsNews;
