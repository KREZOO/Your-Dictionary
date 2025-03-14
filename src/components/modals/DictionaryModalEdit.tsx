import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import Input from '../ui/input/Input';

import {
  updateDictionary,
  getDictionaryById,
} from '../../services/DictionaryService';
import { ModalProps } from './ModalProps';
import './ModalStyles.scss';

interface DictionaryFormValues {
  title: string;
  description: string;
}

const DictionaryModalEdit: React.FC<ModalProps> = ({
  active,
  closeModal,
  id,
}) => {
  const { register, handleSubmit, setValue } = useForm<DictionaryFormValues>();

  useEffect(() => {
    if (!id) return;

    const fetchDictionary = async () => {
      const dictionary = await getDictionaryById(id);
      if (dictionary) {
        setValue('title', dictionary.title);
        setValue('description', dictionary.description);
      }
    };

    fetchDictionary();
  }, [id, setValue]);

  const onSubmit = async (data: DictionaryFormValues) => {
    if (!id) return;

    try {
      await updateDictionary(id, {
        title: data.title,
        description: data.description,
      });
      closeModal();
    } catch (error) {
      console.error('Помилка при оновленні словника:', error);
    }
  };

  if (!active) return null;

  return ReactDOM.createPortal(
    <div className='modal-overlay' onClick={closeModal}>
      <div className='modal' onClick={(e) => e.stopPropagation()}>
        <div className='modal-content'>
          <h2 className='modal-title'>Редагування словника</h2>

          <form onSubmit={handleSubmit(onSubmit)} className='modal-wrapper'>
            <Input
              title='Назва словника'
              type='text'
              placeholder='Введіть назву...'
              {...register('title', { required: 'Це поле обовʼязкове' })}
            />

            <Input
              title='Опис словника'
              type='text'
              placeholder='Введіть опис...'
              className='description'
              {...register('description')}
            />

            <button className='btn-create' type='submit'>
              Зберегти
            </button>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default DictionaryModalEdit;
