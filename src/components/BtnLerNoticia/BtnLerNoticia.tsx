import style from './BtnLerNoticia.module.css';

type BtnLerNoticiaProps = {
  link: string;
};

function BtnLerNoticia({ link }: BtnLerNoticiaProps) {
  return (
    <button
      type="button"
      onClick={ () => window.open(`${link}`) }
      className={ style.btnLer }
    >
      <p>
        Leia a notícia aqui
      </p>
    </button>
  );
}

export default BtnLerNoticia;
