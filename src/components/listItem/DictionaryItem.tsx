import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import Icon from '../ui/icon/Icon';
import OptionsMenu from '../optionsMenu/OptionsMenu';
import DictionaryModalEdit from '../modals/DictionaryModalEdit';
import Tooltip from '../ui/tooltip/Tooltip';

import { DictionaryItemProps } from './ListItemProps';
import './ListItemStyles.scss';

const DictionaryItem: React.FC<DictionaryItemProps> = ({
  id,
  title,
  description,
  dateDictionary,
}) => {
  const storageKey = `dictionaryModalEditState_${id}`;

  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isModalOpen) {
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  }

  useEffect(() => {
    const savedState = localStorage.getItem(storageKey);
    if (savedState === 'true') {
      setIsModalOpen(true);
    }
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, String(isModalOpen));
  }, [isModalOpen, storageKey]);

  const openEditModal = () => {
    setIsModalOpen(true);
  };

  const closeEditModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='list-item'>
      <div className='list-item-header-dictionary'>
        <div className='title-wrap'>
          <Icon name='dictionary' size={36} className='icon' />
          <Tooltip text={title}>
            <Link className='link' to={`/dictionary/${id}`}>
              <h3 className='dictionary-title'>{title}</h3>
            </Link>
          </Tooltip>
        </div>

        {dateDictionary && (
          <>
            <div className='divider'></div>
            <p className='flex-center'>Створено: {dateDictionary}</p>
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
          urlCall={`/dictionary/${id}`}
          onEdit={openEditModal}
          id={id}
          dictionaryData={{ title, description }}
        />
      </div>

      {isExpanded && description && (
        <div className='desc'>
          <div className='desc-item'>{description}</div>
        </div>
      )}

      <DictionaryModalEdit
        active={isModalOpen}
        closeModal={closeEditModal}
        id={id}
      />
    </div>
  );
};

export default DictionaryItem;
