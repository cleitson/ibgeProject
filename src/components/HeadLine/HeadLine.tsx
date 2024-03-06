/* eslint-disable max-len */
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
    <section className="md:flex md:justify-center md:items-center md:mb-10 h-screen md:h-auto">
      { headLine && (
        <div className="flex flex-col justify-center items-center md:flex-row md:w-4/5">
          <img
            src={ `${URL}/${JSON.parse(headLine.imagens).image_fulltext}` }
            alt={ headLine.titulo }
            className="w-487 h-270 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
          />
          <div className="flex-col p-10">
            <div className="flex justify-between">
              <span className="text-[#C31815] font-other font-semibold text-sm/[210%] mb-[10px]">Notícia mais recente</span>
              <IsFavorite idNews={ headLine } />
            </div>
            <h1
              className="text-textGray text-[32px] font-semibold leading-[normal] mb-8 font-title"
            >
              { headLine.titulo }
            </h1>
            <p
              className="text-textGray text-[15px] leading-[normal] mb-5 font-other"
            >
              { headLine.introducao }
            </p>
            <div className="flex justify-between">
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
