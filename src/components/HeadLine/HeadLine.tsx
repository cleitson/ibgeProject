import { useContext, useMemo, useState } from 'react';
import ApiContext from '../../context/ApiContext';
import style from './HeadLine.module.css';
import BtnLerNoticia from '../BtnLerNoticia/BtnLerNoticia';

const URL = 'https://agenciadenoticias.ibge.gov.br';

function HeadLine() {
  const { apiData } = useContext(ApiContext);
  const [headLine, setHeadLine] = useState(apiData.items?.[0]);
  useMemo(() => {
    const head = apiData.items?.[0];
    setHeadLine(head);
  }, [apiData]);

  function calcularDiasAtras(dataString: string): string {
    const data = new Date(dataString);
    const hoje = new Date();
    const umDia = 1000 * 60 * 60 * 24; // Um dia em milissegundos
    const diferenca = hoje.getTime() - data.getTime();
    const diasAtras = Math.round(diferenca / umDia);
    return `${Math.abs(diasAtras)} dias atrás`;
  }

  return (
    <section className={ style.headLineContainer }>
      { headLine && (
        <div className={ style.headLine }>
          <img
            src={ `${URL}/${JSON.parse(headLine.imagens).image_intro}` }
            alt={ headLine.titulo }
          />
          <div className={ style.title }>
            <span>Notícia mais recente</span>
            <h1>{ headLine.titulo }</h1>
            <p>{ headLine.introducao }</p>
            <div className={ style.infos }>
              <span>{ calcularDiasAtras(headLine.data_publicacao.split(' ')[0]) }</span>
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
