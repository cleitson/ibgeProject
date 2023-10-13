import HeadLine from '../../components/HeadLine/HeadLine';
import Header from '../../components/Header/Header';
import style from './Home.module.css';

function Home() {
  return (
    <>
      <header> IBGE NEWS</header>
      <main className={ style.page }>
        <div>
          <HeadLine />
        </div>
      </main>
    </>
  );
}

export default Home;
