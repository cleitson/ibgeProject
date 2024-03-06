/* eslint-disable max-len */
import { Github, Linkedin } from 'lucide-react';
import CardsNews from '../../components/CardsNews/CardsNews';
import HeadLine from '../../components/HeadLine/HeadLine';
import SelectNews from '../../components/SelectNews/SelectNews';

function Home() {
  return (
    <>
      <header
        className="bg-bgHeader text-white text-center py-6 text-5xl font-title"
      >
        IBGE NEWS
      </header>
      <main>
        <HeadLine />
        <SelectNews />
        <CardsNews />
      </main>
      <footer
        className="flex text-white bg-bgHeader h-11 justify-center items-center gap-5"
      >
        <a href="https://github.com/cleitson" target="_blank" rel="noreferrer">
          <Github size={ 30 } strokeWidth={ 1 } />
        </a>
        <a href="https://www.linkedin.com/in/cleitsonlima/" target="_blank" rel="noreferrer">
          <Linkedin size={ 30 } strokeWidth={ 1 } />
        </a>
      </footer>
    </>
  );
}

export default Home;
