import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import { createTerm } from '../../services/TermService';

import Input from '../ui/input/Input';

import { ModalProps } from './ModalProps';
import './ModalStyles.scss';

interface TermForm {
  term: string;
  termEng: string;
  definition: string;
  definitionEng: string;
}

const TermModal: React.FC<ModalProps> = ({
  active,
  closeModal,
  dictionaryId,
}) => {
  const { register, handleSubmit } = useForm<TermForm>();

  const onSubmit = async (data: TermForm) => {
    try {
      await createTerm({
        term: data.term,
        termEng: data.termEng,
        definition: data.definition,
        definitionEng: data.definitionEng,
        dictionaryId: dictionaryId!,
      });
      closeModal();
    } catch (error) {
      console.error('Помилка при створенні терміну:', error);
    }
  };

  if (!active) return null;

  return ReactDOM.createPortal(
    <div className='modal-overlay' onClick={closeModal}>
      <div className='modal' onClick={(e) => e.stopPropagation()}>
        <div className='modal-content'>
          <h2 className='modal-title'>Створення терміну</h2>

          <form onSubmit={handleSubmit(onSubmit)} className='modal-wrapper'>
            <div className='name-term-wrap'>
              <Input
                title='Назва терміну'
                type='text'
                placeholder='Введіть назву...'
                {...register('term', { required: "Це поле обов'язкове" })}
              />

              <Input
                title='Назва терміну (eng)'
                type='text'
                placeholder='Введіть назву...'
                {...register('termEng', { required: "Це поле обов'язкове" })}
              />
            </div>

            <Input
              title='Опис терміну'
              type='text'
              placeholder='Введіть опис...'
              className='description'
              {...register('definition', { required: "Це поле обов'язкове" })}
            />

            <Input
              title='Опис терміну (eng)'
              type='text'
              placeholder='Введіть опис...'
              className='description'
              {...register('definitionEng', {
                required: "Це поле обов'язкове",
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

export default TermModal;
