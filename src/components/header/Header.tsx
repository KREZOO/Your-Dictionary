import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { searchTerms } from '../../services/TermService';
import { searchDictionaries } from '../../services/DictionaryService';
import { motion, AnimatePresence } from 'framer-motion';
import debounce from 'lodash.debounce';

import Icon from '../ui/icon/Icon';
import Logo from '../../assets/images/logo.png';
import SwitchBtn from '../switchBtn/SwitchBtn';

import './HeaderStyles.scss';
import { HeaderProps } from './HeaderProps';

interface FormValues {
  search: string;
}

const Header: React.FC<HeaderProps> = ({ actions }) => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const { register, watch } = useForm<FormValues>();
  const [isFocused, setIsFocused] = useState(false);
  const searchValue = watch('search');

  const debouncedSearch = debounce(async (query: string) => {
    if (!query) {
      setSearchResults([]);
      return;
    }

    const termResults = await searchTerms(query);
    const dictionaryResults = await searchDictionaries(query);

    const combinedResults = [...termResults, ...dictionaryResults];
    const highlightedResults = combinedResults.map((item) => ({
      ...item,
      term: item.term ? highlightMatch(item.term, query) : '',
      definition: item.definition ? highlightMatch(item.definition, query) : '',
      title: item.title ? highlightMatch(item.title, query) : '',
      description: item.description
        ? highlightMatch(item.description, query)
        : '',
    }));

    setSearchResults(highlightedResults);
  }, 500);

  useEffect(() => {
    if (searchValue?.length > 0) {
      debouncedSearch(searchValue);
    } else {
      setSearchResults([]);
    }
  }, [searchValue]);

  const highlightMatch = (text: string, query: string) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  };

  return (
    <header className='header'>
      <div className='container'>
        <div className='logo'>
          <Link to='/' className='link'>
            <div className='wrap'>
              <img src={Logo} alt='Logo' />
              <h1 className='title-logo'>Your Dictionary</h1>
            </div>
          </Link>
        </div>
        <nav className='nav'>
          {actions}

          <form className='search-wrap'>
            <input
              type='text'
              className='search'
              placeholder='Знайти'
              {...register('search')}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            />

            <button type='submit' className='search-btn'>
              <Icon name='search' size={16} className='search-icon icon' />
            </button>

            <AnimatePresence>
              {isFocused &&
                (searchValue?.length > 0 || searchResults.length > 0) && (
                  <motion.div
                    className='search-results'
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ opacity: 0, scaleY: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ originY: 0 }}
                  >
                    {searchResults.length > 0 ? (
                      <ul>
                        {searchResults.map((result) => (
                          <li key={result.id}>
                            <Link
                              to={
                                result.dictionary_id
                                  ? `/dictionary/${result.dictionary_id}`
                                  : `/dictionary/${result.id}`
                              }
                            >
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: result.term || result.title,
                                }}
                              />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>Пошук...</p>
                    )}
                  </motion.div>
                )}
            </AnimatePresence>
          </form>

          <SwitchBtn />
        </nav>
      </div>
    </header>
  );
};

export default Header;
