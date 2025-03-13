import { useState, useEffect } from 'react';

import Icon from '../ui/icon/Icon';
import TermModal from '../modals/TermModal';

interface BtnAddTermProps {
  dictionaryId: string;
}

const BtnAddTerm: React.FC<BtnAddTermProps> = ({ dictionaryId }) => {
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

      <TermModal
        active={active}
        closeModal={() => setActive(false)}
        dictionaryId={dictionaryId}
      />
    </>
  );
};

export default BtnAddTerm;
