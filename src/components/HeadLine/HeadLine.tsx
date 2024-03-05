import { useContext, useMemo, useState } from 'react';
import ApiContext from '../../context/ApiContext';
import BtnLerNoticia from '../BtnLerNoticia/BtnLerNoticia';
import IsFavorite from '../IsFavorite.tsx/IsFavorite';

const URL = 'https://agenciadenoticias.ibge.gov.br';

function HeadLine() {
  const { apiData, dateToDays } = useContext(ApiContext);
  const [headLine, setHeadLine] = useState(apiData.items?.[0]);
  useMemo(() => {
    const head = apiData.items?.[0];
    setHeadLine(head);
  }, [apiData]);

  return (
    <section>
      { headLine && (
        <div>
          <img
            src={ `${URL}/${JSON.parse(headLine.imagens).image_fulltext}` }
            alt={ headLine.titulo }
          />
          <div>
            <div>
              <span>Notícia mais recente</span>
              <IsFavorite idNews={ headLine } />
            </div>
            <h1>{ headLine.titulo }</h1>
            <p>{ headLine.introducao }</p>
            <div>
              <span>{ dateToDays(headLine.data_publicacao) }</span>
              <BtnLerNoticia link={ headLine.link } />
            </div>
          </div>
        </div>
      )}
      { !headLine && (<p>Loading...</p>) }
    </section>
  );
}

export default HeadLine;
