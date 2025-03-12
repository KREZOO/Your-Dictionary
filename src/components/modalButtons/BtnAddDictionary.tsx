import { useState, useEffect } from 'react';

import Icon from '../ui/icon/Icon';
import DictionaryModal from '../modals/DictionaryModal';

import './ModalButtonsStyles.scss';

const BtnAddDictionary = () => {
  const [active, setActive] = useState<boolean>(() => {
    return localStorage.getItem('dictionaryModalState') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('dictionaryModalState', active.toString());
  }, [active]);

  return (
    <>
      <button className='btn-add-dictionary' onClick={() => setActive(true)}>
        <Icon name='add' size={32} className='icon' />
        ДОДАТИ
      </button>

      <DictionaryModal active={active} closeModal={() => setActive(false)} />
    </>
  );
};

export default BtnAddDictionary;
