import ListItem from '../listItem/ListItem';

import { ListItemsProps } from './ListItemsProps';
import './ListItemsStyles.scss';

const ListItems: React.FC<ListItemsProps> = ({ title, items }) => {
  return (
    <div className='list-wrap'>
      <h2 className='list-title'>{title}</h2>
      <div className='list'>
        {items.map((item) => (
          <ListItem
            key={item.id}
            title={item.title}
            description={item.description}
            date={item.createdAt}
          />
        ))}
      </div>
    </div>
  );
};

export default ListItems;
