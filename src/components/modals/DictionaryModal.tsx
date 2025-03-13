import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';

import Input from '../ui/input/Input';

import { createDictionary } from '../../services/dictionaryService';
import { ModalProps } from './ModalProps';
import './ModalStyles.scss';

const DictionaryModal: React.FC<ModalProps> = ({ active, closeModal }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    const { title, description } = data;
    if (title && description) {
      try {
        await createDictionary({ title, description });
        closeModal();
      } catch (error) {
        console.error('Помилка при створенні словника:', error);
      }
    }
  };

  if (!active) return null;

  return ReactDOM.createPortal(
    <div className='modal-overlay' onClick={closeModal}>
      <div className='modal' onClick={(e) => e.stopPropagation()}>
        <div className='modal-content'>
          <h2 className='modal-title'>Створення словника</h2>

          <form onSubmit={handleSubmit(onSubmit)} className='modal-wrapper'>
            <Input
              title='Назва словника'
              type='text'
              placeholder='Введіть назву...'
              {...register('title', {
                required: 'Поле назви обовязкове для заповнення',
              })}
            />

            <Input
              title='Опис словника'
              type='text'
              placeholder='Введіть опис...'
              className='description'
              {...register('description', {
                required: 'Поле опису обовязкове для заповнення',
              })}
            />

            <button type='submit' className='btn-create'>
              Створити
            </button>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default DictionaryModal;
