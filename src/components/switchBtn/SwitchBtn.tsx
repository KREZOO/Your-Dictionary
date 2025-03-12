import { useTheme } from '../../contexts/ThemeContext';

import Icon from '../ui/icon/Icon';

import './SwitchBtnStyles.scss';

const SwitchBtn = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className='switch'>
      <input
        type='checkbox'
        onChange={toggleTheme}
        checked={theme === 'dark'}
      />
      <span className='slider'></span>
      <Icon name='light' size={16} className='light' />
      <Icon name='dark' size={16} className='dark' />
    </label>
  );
};

export default SwitchBtn;
