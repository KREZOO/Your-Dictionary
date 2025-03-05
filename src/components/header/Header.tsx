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
            <img src='/src/assets/icons/add-icon.svg' alt='add-icon' />
            ДОДАТИ
          </button>

          <div className='search-wrap'>
            <input type='text' className='search' placeholder='Знайти' />
            <img src='/src/assets/icons/search-icon.svg' alt='search-icon' />
          </div>

          <div className='themes'>p</div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
