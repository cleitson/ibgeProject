import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import ApiContextProvider from './context/ApiContextProvider.tsx';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <BrowserRouter>
    <ApiContextProvider>
      <App />
    </ApiContextProvider>
  </BrowserRouter>,
);
