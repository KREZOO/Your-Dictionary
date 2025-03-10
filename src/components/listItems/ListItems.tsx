import ListItem from '../listItem/ListItem';

import { ListItemsProps } from './ListItemsProps';
import './ListItemsStyles.scss';

const ListItems: React.FC<ListItemsProps> = ({ title, items, type }) => {
  return (
    <div className='list-wrap'>
      <h2 className='list-title'>{title}</h2>
      <div className='list'>
        {items.map((item) => (
          <ListItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            descriptionEng={item.descriptionEng}
            date={item.createdAt}
            type={type}
          />
        ))}
      </div>
    </div>
  );
};

export default ListItems;
