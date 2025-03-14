import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Icon from '../ui/icon/Icon';
import OptionsMenu from '../optionsMenu/OptionsMenu';
import TermModalEdit from '../modals/TermModalEdit';
import Tooltip from '../ui/tooltip/Tooltip';

import { TermItemProps } from './ListItemProps';
import './ListItemStyles.scss';

const TermItem: React.FC<TermItemProps> = ({
  id,
  title,
  titleEng,
  description,
  descriptionEng,
  dateTerm,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const storageKey = `termModalEditState_${id}`;

  if (isModalOpen) {
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  }

  const openEditModal = () => {
    setIsModalOpen(true);
  };

  const closeEditModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const savedState = localStorage.getItem(storageKey);
    if (savedState === 'true') {
      setIsModalOpen(true);
    }
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, String(isModalOpen));
  }, [isModalOpen, storageKey]);

  return (
    <div className='list-item'>
      <div className='list-item-header-term'>
        <div className='title-wrap'>
          <Icon name='term' size={30} className='header-term-icon icon' />
          <Tooltip text={title}>
            <h3 className='term-title'>{title}</h3>
          </Tooltip>
        </div>

        {titleEng && (
          <>
            <div className='divider'></div>
            <Tooltip text={titleEng}>
              <h3 className='term-title-eng flex-center'>{titleEng}</h3>
            </Tooltip>
          </>
        )}

        {dateTerm && (
          <>
            <div className='divider'></div>
            <p className='flex-center'>Створено: {dateTerm}</p>
          </>
        )}

        {description && (
          <>
            <div className='divider'></div>
            <div
              className='desc-toggle'
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? <p>Згорнути опис</p> : <p>Переглянути опис</p>}
              <Icon
                name={isExpanded ? 'chevron-up' : 'chevron-down'}
                size={20}
                className='icon'
              />
            </div>
          </>
        )}

        <OptionsMenu
          urlCall={`/term/${id}`}
          onEdit={openEditModal}
          id={id}
          termData={{
            term: title,
            definition: description,
            term_eng: titleEng,
            definition_eng: descriptionEng,
          }}
        />
      </div>

      <AnimatePresence>
        {isExpanded && description && (
          <motion.div
            className='desc'
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'linear' }}
          >
            <div>{description}</div>
            <div>{descriptionEng}</div>
          </motion.div>
        )}
      </AnimatePresence>

      <TermModalEdit active={isModalOpen} closeModal={closeEditModal} id={id} />
    </div>
  );
};

export default TermItem;
