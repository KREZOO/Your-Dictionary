import { Link } from 'react-router-dom';

import Icon from '../Icon';
import SwitchBtn from '../switchBtn/SwitchBtn';
import BtnAddDictionary from '../modalButtons/BtnAddDictionary';

import './HeaderStyles.scss';

const Header = () => {
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
          <BtnAddDictionary />

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
