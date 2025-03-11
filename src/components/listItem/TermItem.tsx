import { useState } from 'react';

import Icon from '../Icon';

import { TermItemProps } from './ListItemProps';
import './ListItemStyles.scss';

const TermItem: React.FC<TermItemProps> = ({
  title,
  titleEng,
  description,
  descriptionEng,
  dateTerm,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='list-item'>
      <div className='list-item-header-term'>
        <div className='title-wrap'>
          <Icon name='term' size={36} className='icon' />
          <div className='term-titles'>
            <h3>{title}</h3>
          </div>
        </div>

        {titleEng && (
          <>
            <div className='divider'></div>
            <p className='flex-center'>{titleEng}</p>
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
      </div>

      {isExpanded && description && (
        <div className='desc'>
          <div>{description}</div>
          <div>{descriptionEng}</div>
        </div>
      )}
    </div>
  );
};

export default TermItem;
