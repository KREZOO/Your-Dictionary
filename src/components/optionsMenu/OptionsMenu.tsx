import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { deleteTerm } from '../../services/TermService';
import { deleteDictionary } from '../../services/DictionaryService';

import Icon from '../ui/icon/Icon';

import { OptionsMenuProps } from './OptionsMenuProps';
import './OptionsMenuStyles.scss';

const OptionsMenu: React.FC<OptionsMenuProps> = ({
  urlCall,
  onEdit,
  id,
  dictionaryData,
  termData,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const editIconName = theme === 'dark' ? 'edit-dark' : 'edit-light';

  const handleEditClick = () => {
    setIsOpen(false);
    onEdit(id || '');
  };

  const handleCopyClick = () => {
    let textToCopy = '';

    if (urlCall.startsWith('/dictionary/') && dictionaryData) {
      textToCopy = `${dictionaryData.title}: ${dictionaryData.description}`;
    } else if (urlCall.startsWith('/term/') && termData) {
      textToCopy = `${termData.term} - ${termData.definition}, ${termData.term_eng} - ${termData.definition_eng}`;
    }

    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy);
    }

    setIsOpen(false);
  };

  const handleDeleteClick = async () => {
    if (!id) {
      console.error('ID не передано');
      return;
    }

    try {
      if (urlCall.startsWith('/dictionary/')) {
        await deleteDictionary(id);
      } else if (urlCall.startsWith('/term/')) {
        await deleteTerm(id);
      }
      setIsOpen(false);
    } catch (error) {
      console.error('Помилка при видаленні:', error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='context-menu' ref={menuRef}>
      <button className='menu-button' onClick={() => setIsOpen(!isOpen)}>
        <Icon name='dots' size={18} className='icon' />
      </button>

      {isOpen && (
        <ul className='dropdown-menu'>
          <li className='menu-item' onClick={handleEditClick}>
            <Icon
              name={editIconName}
              size={16}
              className='dropdown-menu-icon edit-icon'
            />
            Редагування
          </li>

          <li className='menu-item' onClick={handleCopyClick}>
            <Icon name='copy' size={16} className='dropdown-menu-icon icon' />
            Скопіювати
          </li>

          <li className='menu-item' onClick={handleDeleteClick}>
            <Icon name='trash' size={16} className='dropdown-menu-icon icon' />
            Видалити
          </li>
        </ul>
      )}
    </div>
  );
};

export default OptionsMenu;
