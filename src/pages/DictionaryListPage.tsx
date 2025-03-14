import { useEffect, useState } from 'react';
import { getDictionaries } from '../services/DictionaryService.ts';

import Header from '../components/header/Header.tsx';
import Footer from '../components/footer/Footer.tsx';
import ListItems from '../components/listItems/ListItems.tsx';
import BtnAddDictionary from '../components/modalButtons/BtnAddDictionary.tsx';

import './PageStyles.scss';

const DictionaryListPage = () => {
  const [dictionaries, setDictionaries] = useState<any[]>([]);

  useEffect(() => {
    const fetchDictionaries = async () => {
      const data = await getDictionaries();
      setDictionaries(data);
    };
    fetchDictionaries();
  }, []);

  return (
    <div className='page'>
      <Header actions={<BtnAddDictionary />} />

      <main className='main'>
        <div className='container-main'>
          <ListItems
            title='Останні створені'
            items={dictionaries.map((dictionary) => ({
              id: dictionary.id,
              title: dictionary.title,
              description: dictionary.description,
              createdAt: dictionary.created_at,
            }))}
            type='dictionary'
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DictionaryListPage;
