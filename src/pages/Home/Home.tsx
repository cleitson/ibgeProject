import CardsNews from '../../components/CardsNews/CardsNews';
import HeadLine from '../../components/HeadLine/HeadLine';
import SelectNews from '../../components/SelectNews/SelectNews';
import style from './Home.module.css';

function Home() {
  return (
    <main className={ style.page }>
      <header> IBGE NEWS</header>
      <HeadLine />
      <SelectNews />
      <CardsNews />
    </main>
  );
}

export default Home;
