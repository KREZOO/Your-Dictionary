import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import Input from '../ui/input/Input';

import { updateTerm, getTermById } from '../../services/TermService';
import { ModalProps } from './ModalProps';
import './ModalStyles.scss';

interface TermFormValues {
  term: string;
  term_eng: string;
  definition: string;
  definition_eng: string;
}

const TermModalEdit: React.FC<ModalProps> = ({ active, closeModal, id }) => {
  const { register, handleSubmit, setValue } = useForm<TermFormValues>();

  useEffect(() => {
    if (!id) return;

    const fetchTerm = async () => {
      const termData = await getTermById(id);
      if (termData) {
        setValue('term', termData.term);
        setValue('term_eng', termData.term_eng);
        setValue('definition', termData.definition);
        setValue('definition_eng', termData.definition_eng);
      }
    };

    fetchTerm();
  }, [id, setValue]);

  const onSubmit = async (data: TermFormValues) => {
    if (!id) return;

    try {
      await updateTerm(id, {
        term: data.term,
        term_eng: data.term_eng,
        definition: data.definition,
        definition_eng: data.definition_eng,
      } as Record<string, string>);
      closeModal();
    } catch (error) {
      console.error('Помилка при оновленні терміну:', error);
    }
  };

  if (!active) return null;

  return ReactDOM.createPortal(
    <div className='modal-overlay' onClick={closeModal}>
      <div className='modal' onClick={(e) => e.stopPropagation()}>
        <div className='modal-content'>
          <h2 className='modal-title'>Редагування терміну</h2>

          <form onSubmit={handleSubmit(onSubmit)} className='modal-wrapper'>
            <div className='name-term-wrap'>
              <Input
                title='Назва терміну'
                type='text'
                placeholder='Введіть назву...'
                {...register('term', { required: 'Це поле обовʼязкове' })}
              />

              <Input
                title='Назва терміну (eng)'
                type='text'
                placeholder='Введіть назву англійською...'
                {...register('term_eng')}
              />
            </div>

            <Input
              title='Опис терміну'
              type='text'
              placeholder='Введіть опис...'
              className='description'
              {...register('definition')}
            />

            <Input
              title='Опис терміну (eng)'
              type='text'
              placeholder='Введіть опис англійською...'
              className='description'
              {...register('definition_eng')}
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

export default TermModalEdit;
