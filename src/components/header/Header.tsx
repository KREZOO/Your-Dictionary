import Icon from '../Icon';
import SwitchBtn from '../switchBtn/SwitchBtn';

import './HeaderStyles.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='logo'>
          <div className='wrap'>
            <img src='/src/assets/images/logo.png' alt='Logo' />
            <span>Your Dictionary</span>
          </div>
        </div>
        <nav className='nav'>
          <button className='btn'>
            <Icon name='add' size={32} className='icon' />
            ДОДАТИ
          </button>

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
