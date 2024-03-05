/* eslint-disable max-len */
type BtnLerNoticiaProps = {
  link: string;
};

function BtnLerNoticia({ link }: BtnLerNoticiaProps) {
  return (
    <button
      type="button"
      onClick={ () => window.open(`${link}`) }
      className="bg-[#05D465] flex w-[167px] h-9 justify-center items-center gap-2.5 shrink-0 shadow-[0_4px_4px_#00000040] p-2.5 rounded-[5px] hover:bg-green-400"
    >
      <p
        className="text-black text-center text-sm leading-[165%] opacity-70 font-other font-semibold"
      >
        Leia a notícia aqui
      </p>
    </button>
  );
}

export default BtnLerNoticia;
