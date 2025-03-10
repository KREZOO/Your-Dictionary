import { useState } from 'react';

import Icon from '../Icon';

import { ListItemProps } from './ListItemProps';
import './ListItemStyles.scss';

const ListItem: React.FC<ListItemProps> = ({
  title,
  description,
  descriptionEng,
  date,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='list-item'>
      <div className='list-item-header'>
        <div className='title-wrap'>
          <Icon name='dictionary' size={36} className='icon' />
          <h3>{title}</h3>
        </div>

        <div className='divider'></div>

        <p className='date'>{date}</p>

        <div className='divider'></div>

        <div className='desc-toggle' onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? <p>Згорнути опис</p> : <p>Переглянути опис</p>}

          <Icon
            name={isExpanded ? 'chevron-up' : 'chevron-down'}
            size={20}
            className='icon'
          />
        </div>
      </div>
      {isExpanded && (
        <div className='desc'>
          {description} {descriptionEng}
        </div>
      )}
    </div>
  );
};

export default ListItem;
