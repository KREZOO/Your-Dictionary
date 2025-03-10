import { useParams } from 'react-router-dom';

import Header from '../components/header/Header.tsx';
import Footer from '../components/footer/Footer.tsx';
import ListItems from '../components/listItems/ListItems.tsx';
import BtnAddTerm from '../components/btnAddTerm/BtnAddTerm.tsx';

import dictionaries from '../mocked/mockDictionaries.json';

import './PageStyles.scss';

const DictionaryDetailPage = () => {
  const { id } = useParams();
  const dictionary = dictionaries.find((dict) => dict.id === id);

  if (!dictionary) {
    return (
      <div className='page'>
        <Header />
        <main className='main'>
          <div className='container-main'>
            <div className='not-found'>
              <h2>Словник не знайдено</h2>
              <p>Можливо, ID невірний або цей словник був видалений.</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className='page'>
      <Header />

      <main className='main'>
        <div className='container-main'>
          <ListItems
            title='Терміни'
            items={dictionary.terms.map((term) => ({
              id: term.id,
              title: term.term,
              description: term.definition,
              descriptionEng: term.definitionEng,
            }))}
            type='term'
          />

          <div className='btn-add-term-wrap'>
            <BtnAddTerm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DictionaryDetailPage;
