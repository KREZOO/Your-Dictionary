import { useState } from 'react';

import { Link } from 'react-router-dom';
import Icon from '../Icon';

import { DictionaryItemProps } from './ListItemProps';
import './ListItemStyles.scss';

const DictionaryItem: React.FC<DictionaryItemProps> = ({
  id,
  title,
  description,
  dateDictionary,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='list-item'>
      <div className='list-item-header-dictionary'>
        <div className='title-wrap'>
          <Icon name='dictionary' size={36} className='icon' />
          <Link className='link' to={`/dictionary/${id}`}>
            <h3>{title}</h3>
          </Link>
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
      </div>

      {isExpanded && description && (
        <div className='desc'>
          <div className='desc-item'>{description}</div>
        </div>
      )}
    </div>
  );
};

export default DictionaryItem;
