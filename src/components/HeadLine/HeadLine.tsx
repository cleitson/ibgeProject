import { useContext, useMemo, useState } from 'react';
import ApiContext from '../../context/ApiContext';
import style from './HeadLine.module.css';

const URL = 'https://agenciadenoticias.ibge.gov.br';

function HeadLine() {
  const { apiData } = useContext(ApiContext);
  const [headLine, setHeadLine] = useState(apiData.items?.[0]);
  useMemo(() => {
    const head = apiData.items?.[0];
    setHeadLine(head);
  }, [apiData]);

  return (
    <div>
      { headLine && (
        <div className={ style.headLine }>
          <div>
            <img
              src={ `${URL}/${JSON.parse(headLine.imagens).image_intro}` }
              alt={ headLine.titulo }
            />
          </div>
          <div className={ style.title }>
            <h1>{ headLine.titulo }</h1>
            <p>{ headLine.introducao }</p>
          </div>
        </div>
      )}
      { !headLine && (<p>Loading...</p>) }
    </div>
  );
}

export default HeadLine;
