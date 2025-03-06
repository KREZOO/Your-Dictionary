import { useState, useEffect } from 'react';

import Icon from '../Icon';

import './SwitchBtnStyles.scss';

const SwitchBtn = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <label className='switch'>
      <input type='checkbox' onClick={toggleTheme} />
      <span className='slider'></span>
      <Icon name='light' size={16} className='light' />
      <Icon name='dark' size={16} className='dark' />
    </label>
  );
};

export default SwitchBtn;
