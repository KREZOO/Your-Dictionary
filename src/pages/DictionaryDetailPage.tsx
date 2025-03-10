// import { useParams } from 'react-router-dom';

import Header from '../components/header/Header.tsx';
import Footer from '../components/footer/Footer.tsx';
// import ListItems from '../components/listItems/ListItems.tsx';

// import dictionaries from '../mocked/mockDictionaries.json';

import './DictionaryListPageStyles.scss';

const DictionaryDetailPage = () => {
  // const { id } = useParams();
  // const dictionary = dictionaries.find((dict) => dict.id === id);

  return (
    <div className='page'>
      <Header />

      <main className='main'>
        <div className='container-main'>
          {/* <ListItems title='Останні створені'  /> */}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DictionaryDetailPage;
