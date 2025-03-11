import DictionaryItem from '../listItem/DictionaryItem';
import TermItem from '../listItem/TermItem';

import { ListItemsProps } from './ListItemsProps';
import './ListItemsStyles.scss';

const ListItems: React.FC<ListItemsProps> = ({ title, items, type }) => {
  return (
    <div className='list-wrap'>
      <h2 className='list-title'>{title}</h2>
      <div className='list'>
        {items.map((item) =>
          type === 'dictionary' ? (
            <DictionaryItem
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              dateDictionary={item.createdAt}
            />
          ) : (
            <TermItem
              key={item.id}
              id={item.id}
              title={item.title}
              titleEng={item.titleEng}
              description={item.description}
              descriptionEng={item.descriptionEng}
              dateTerm={item.createdAt}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ListItems;
