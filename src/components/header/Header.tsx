import { Link } from 'react-router-dom';

import Icon from '../ui/icon/Icon';
import SwitchBtn from '../switchBtn/SwitchBtn';

import './HeaderStyles.scss';
import { HeaderProps } from './HeaderProps';

const Header: React.FC<HeaderProps> = ({ actions }) => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='logo'>
          <Link to='/' className='link'>
            <div className='wrap'>
              <img src='/src/assets/images/logo.png' alt='Logo' />
              <h1 className='title-logo'>Your Dictionary</h1>
            </div>
          </Link>
        </div>
        <nav className='nav'>
          {actions}

          <div className='search-wrap'>
            <input type='text' className='search' placeholder='Знайти' />
            <Icon name='search' size={16} className='search-icon icon' />
          </div>

          <SwitchBtn />
        </nav>
      </div>
    </header>
  );
};

export default Header;
