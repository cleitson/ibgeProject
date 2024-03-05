import CardsNews from '../../components/CardsNews/CardsNews';
import HeadLine from '../../components/HeadLine/HeadLine';
import SelectNews from '../../components/SelectNews/SelectNews';

function Home() {
  return (
    <>
      <header
        className="bg-bgHeader text-white text-center py-6 text-5xl md:mb-12 "
      >
        IBGE NEWS
      </header>
      <main className="m-10">
        <HeadLine />
        <SelectNews />
        <CardsNews />
      </main>
    </>
  );
}

export default Home;
