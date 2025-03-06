import Header from './components/header/Header.tsx';
import Footer from './components/footer/Footer.tsx';

import './assets/styles/global.scss';

const App = () => {
  return (
    <div className='app'>
      <Header />

      <main className='main'>
        <div className='container'>Main</div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
