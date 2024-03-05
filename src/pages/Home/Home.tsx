import CardsNews from '../../components/CardsNews/CardsNews';
import HeadLine from '../../components/HeadLine/HeadLine';
import SelectNews from '../../components/SelectNews/SelectNews';

function Home() {
  return (
    <>
      <header
        className="bg-bgHeader text-white text-center py-6 mb-10 text-4xl "
      >
        IBGE NEWS
      </header>
      <main>
        <HeadLine />
        <SelectNews />
        <CardsNews />
      </main>
    </>
  );
}

export default Home;
