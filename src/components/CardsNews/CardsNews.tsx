/* eslint-disable max-len */
import { useContext, useState } from 'react';
import { ArrowUpNarrowWide } from 'lucide-react';
import ApiContext from '../../context/ApiContext';
import BtnLerNoticia from '../BtnLerNoticia/BtnLerNoticia';
import IsFavorite from '../IsFavorite.tsx/IsFavorite';
import dateToDays from '../../utils/dateToDays';

const URL = 'https://agenciadenoticias.ibge.gov.br';

function CardsNews() {
  const { dataSelected, styleSelected } = useContext(ApiContext);
  const [btnMore, setBtnMore] = useState(true);

  const showMoreItens = () => {
    setBtnMore((prev) => !prev);
    if (!btnMore) {
      window.scrollTo(0, 0);
    }
  };

  const data = btnMore ? dataSelected?.slice(0, 6) : dataSelected;

  const btnMais = 'flex justify-center items-center w-[220px] h-[60px] border cursor-pointer mx-auto my-[30px] rounded-sm border-solid border-[#C31815]';
  const btnMenos = 'fixed bottom-4 left-4 px-4 py-2 cursor-pointer mx-auto my-[30px] rounded-full bg-blue-500';
  return (
    <section className="flex-col p-3">
      { styleSelected ? (
        <section className="flex-col md:justify-center md:gap-5 md:flex md:flex-row md:flex-wrap">
          { data?.map((item) => (
            <div key={ item.id } className="flex-col flex-wrap justify-center items-center bg-white shadow-md md:p-4 md:w-[26vw] gap-5 mb-5">
              <h2 className="text-textGray font-title text-xl font-semibold p-3">{ item.titulo }</h2>
              <p className="text-textGray text-[15px] font-normal p-3 mb-5">{ item.introducao }</p>
              <div className="flex justify-between p-3">
                <span>{ dateToDays(item.data_publicacao) }</span>
                <BtnLerNoticia link={ item.link } />
              </div>
              <div className="flex justify-end p-5">
                <IsFavorite idNews={ item } />
              </div>
            </div>
          )) }
        </section>
      ) : (
        <section className="flex-col  md:justify-center md:gap-5 md:flex md:flex-row md:flex-wrap">
          { data?.map((item) => (
            <div key={ item.id } className="flex-col md:flex md:flex-row bg-white shadow-md md:p-[20px] md:w-[80vw] gap-5 mb-5 ">
              <img
                src={ `${URL}/${JSON.parse(item.imagens).image_intro}` }
                alt={ item.titulo }
                width={ 500 }
              />
              <div>
                <h2 className="text-textGray font-title text-xl font-semibold p-2">{ item.titulo }</h2>
                <p className="text-textGray text-[15px] font-normal p-2 mb-5">{ item.introducao }</p>
                <div className="flex justify-between p-3">
                  <span className="p-2">{ dateToDays(item.data_publicacao) }</span>
                  <BtnLerNoticia link={ item.link } />
                </div>
                <div className="flex justify-end p-5">
                  <IsFavorite idNews={ item } />
                </div>
              </div>
            </div>
          )) }
        </section>
      )}
      <button onClick={ showMoreItens } className={ `${btnMore ? btnMais : btnMenos}` }>
        <p
          className={ `${btnMore ? 'text-[#C31815] text-center text-sm font-medium leading-[15px] tracking-[1.6px] uppercase font-other' : 'text-white'}` }
        >
          { btnMore ? 'mais noticias' : <ArrowUpNarrowWide /> }
        </p>
      </button>
      { !dataSelected && (<p>Loading...</p>) }
    </section>
  );
}

export default CardsNews;
