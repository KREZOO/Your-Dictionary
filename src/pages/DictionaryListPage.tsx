import Header from '../components/header/Header.tsx';
import Footer from '../components/footer/Footer.tsx';
import ListItems from '../components/listItems/ListItems.tsx';

import dictionaries from '../mocked/mockDictionaries.json';

import './PageStyles.scss';

const DictionaryListPage = () => {
  return (
    <div className='page'>
      <Header />

      <main className='main'>
        <div className='container-main'>
          <ListItems
            title='Останні створені'
            items={dictionaries}
            type='dictionary'
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DictionaryListPage;
