type BtnLerNoticiaProps = {
  link: string;
};

function BtnLerNoticia({ link }: BtnLerNoticiaProps) {
  return (
    <button
      type="button"
      onClick={ () => window.open(`${link}`) }
    >
      <p>
        Leia a notícia aqui
      </p>
    </button>
  );
}

export default BtnLerNoticia;
