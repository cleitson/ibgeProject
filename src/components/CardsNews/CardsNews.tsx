import { useContext } from 'react';
import ApiContext from '../../context/ApiContext';

const URL = 'https://agenciadenoticias.ibge.gov.br';

function CardsNews() {
  const { dataSelected } = useContext(ApiContext);

  return (
    <section>
      { dataSelected && (
        <div>
          { dataSelected.map((item) => (
            <div key={ item.id }>
              <img
                src={ `${URL}/${JSON.parse(item.imagens).image_intro}` }
                alt={ item.titulo }
              />
              <h2>{ item.titulo }</h2>
              <p>{ item.introducao }</p>
              <span>{ item.data_publicacao.split(' ')[0] }</span>
            </div>
          )) }
        </div>
      ) }
      { !dataSelected && (<p>Loading...</p>) }
    </section>
  );
}

export default CardsNews;
