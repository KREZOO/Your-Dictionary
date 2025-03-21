import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/header/Header.tsx';
import Footer from '../components/footer/Footer.tsx';
import ListItems from '../components/listItems/ListItems.tsx';
import BtnAddTerm from '../components/modalButtons/BtnAddTerm.tsx';
import BtnBack from '../components/ui/btnBack/BtnBack.tsx';

import { getTerms } from '../services/TermService';
import { getDictionaryById } from '../services/DictionaryService';

import './PageStyles.scss';

const DictionaryDetailPage = () => {
  const { id } = useParams();
  const [terms, setTerms] = useState<any[]>([]);
  const [dictionaryName, setDictionaryName] = useState<string>('');

  useEffect(() => {
    const fetchTerms = async () => {
      if (id) {
        const termsData = await getTerms(id);

        const sortedTerms = termsData.sort((a, b) => {
          if (a.term.toLowerCase() < b.term.toLowerCase()) return -1;
          if (a.term.toLowerCase() > b.term.toLowerCase()) return 1;
          return 0;
        });

        setTerms(sortedTerms);

        const dictionaryData = await getDictionaryById(id);
        if (dictionaryData) {
          setDictionaryName(dictionaryData.title);
        }
      }
    };

    fetchTerms();
  }, [id]);

  if (!id || !terms.length) {
    return (
      <div className='page'>
        <Header actions={<BtnBack link='/' text='повернутись' />} />
        <main className='main'>
          <div className='container-main'>
            <div className='not-found'>
              <h2>Термінів не знайдено</h2>
              <p>Додайте перший термін для цього словника</p>
              <BtnAddTerm dictionaryId={id || ''} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className='page'>
      <Header actions={<BtnBack link='/' text='повернутись' />} />

      <main className='main'>
        <div className='container-main'>
          <ListItems
            title={`Терміни в словнику "${dictionaryName}"`}
            items={terms.map((term) => ({
              id: term.id,
              title: term.term,
              titleEng: term.term_eng,
              description: term.definition,
              descriptionEng: term.definition_eng,
              createdAt: term.created_at || '',
            }))}
            type='term'
          />

          <div className='btn-add-term-wrap'>
            <BtnAddTerm dictionaryId={id} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DictionaryDetailPage;
