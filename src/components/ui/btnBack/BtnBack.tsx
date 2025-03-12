import { Link } from 'react-router-dom';
import { useTheme } from '../../../contexts/ThemeContext';

import Icon from '../icon/Icon';

import { BtnBackProps } from './BtnBackProps';
import './BtnBackStyles.scss';

const BtnBack: React.FC<BtnBackProps> = ({ link, text }) => {
  const { theme } = useTheme();

  const iconName = theme === 'dark' ? 'return-dark' : 'return-light';

  return (
    <Link to={link} className='btn-back link'>
      <Icon name={iconName} size={32} className='btn-back-icon' />
      {text}
    </Link>
  );
};

export default BtnBack;
