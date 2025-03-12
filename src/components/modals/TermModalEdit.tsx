import ReactDOM from 'react-dom';

import Input from '../ui/input/Input';

import { ModalProps } from './ModalProps';
import './ModalStyles.scss';

const TermModalEdit: React.FC<ModalProps> = ({ active, closeModal }) => {
  if (!active) return null;

  return ReactDOM.createPortal(
    <div className='modal-overlay' onClick={closeModal}>
      <div className='modal' onClick={(e) => e.stopPropagation()}>
        <div className='modal-content'>
          <h2 className='modal-title'>Редагування терміну</h2>

          <div className='modal-wrapper'>
            <div className='name-term-wrap'>
              <Input
                title='Назва терміну'
                type='text'
                placeholder='Введіть назву...'
              />

              <Input
                title='Назва терміну (eng)'
                type='text'
                placeholder='Введіть назву...'
              />
            </div>

            <Input
              title='Опис терміну'
              type='text'
              placeholder='Введіть опис...'
              className='description'
            />

            <Input
              title='Опис терміну (eng)'
              type='text'
              placeholder='Введіть опис...'
              className='description'
            />
          </div>

          <button className='btn-create' onClick={closeModal}>
            Зберегти
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default TermModalEdit;
