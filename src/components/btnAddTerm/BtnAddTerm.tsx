import { useState, useEffect } from 'react';

import Icon from '../Icon';
import TermModal from '../termModal/TermModal';

const BtnAddTerm = () => {
  const [active, setActive] = useState<boolean>(() => {
    return localStorage.getItem('termModalState') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('termModalState', active.toString());
  }, [active]);

  return (
    <>
      <button onClick={() => setActive(true)}>
        <Icon name='add' size={36} className='icon' />
      </button>

      <TermModal active={active} closeModal={() => setActive(false)} />
    </>
  );
};

export default BtnAddTerm;
