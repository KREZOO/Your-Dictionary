import { useState } from 'react';
import Icon from '../Icon';
import { ListItemProps } from './ListItemProps';
import './ListItemStyles.scss';
import { Link } from 'react-router-dom';

const ListItem: React.FC<ListItemProps> = ({
  title,
  description,
  descriptionEng,
  date,
  type,
  id,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='list-item'>
      <div className='list-item-header'>
        <div className='title-wrap'>
          <Icon
            name={type === 'dictionary' ? 'dictionary' : 'term'}
            size={36}
            className='icon'
          />

          {type === 'dictionary' ? (
            <Link className='link' to={`/dictionary/${id}`}>
              <h3>{title}</h3>
            </Link>
          ) : (
            <h3>{title}</h3>
          )}
        </div>

        {date && (
          <>
            <div className='divider'></div>
            <p className='date'>{date}</p>
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
          <div className='desc-item'>{descriptionEng}</div>
        </div>
      )}
    </div>
  );
};

export default ListItem;
