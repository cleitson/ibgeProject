import CardsNews from '../../components/CardsNews/CardsNews';
import HeadLine from '../../components/HeadLine/HeadLine';
import SelectNews from '../../components/SelectNews/SelectNews';
import './Home.module.css';

function Home() {
  return (
    <>
      <header>IBGE NEWS</header>
      <main>
        <HeadLine />
        <SelectNews />
        <CardsNews />
      </main>
    </>
  );
}

export default Home;
