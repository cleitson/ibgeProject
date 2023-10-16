import HeadLine from '../../components/HeadLine/HeadLine';
import style from './Home.module.css';

function Home() {
  return (
    <main className={ style.page }>
      <header> IBGE NEWS</header>
      <HeadLine />
    </main>
  );
}

export default Home;
