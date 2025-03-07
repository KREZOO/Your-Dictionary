import ReactDOM from 'react-dom';

import Input from '../input/Input';

import { ModalProps } from '../../types/ModalProps';
import '../../assets/styles/components/ModalStyles.scss';

const DictionaryModal: React.FC<ModalProps> = ({ active, closeModal }) => {
  if (!active) return null;

  return ReactDOM.createPortal(
    <div className='modal-overlay' onClick={closeModal}>
      <div className='modal' onClick={(e) => e.stopPropagation()}>
        <div className='modal-content'>
          <h2 className='modal-title'>Створення словника</h2>

          <div className='modal-wrapper'>
            <Input
              title='Назва словника'
              type='text'
              placeholder='Введіть назву...'
            />

            <Input
              title='Опис словника'
              type='text'
              placeholder='Введіть опис...'
              className='description'
            />
          </div>

          <button className='btn-create' onClick={closeModal}>
            Створити
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default DictionaryModal;
