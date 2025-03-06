import './FooterStyles.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='wrap'>
          <div className='developers'>
            <span>
              Розробник (Дизайн): Крижній Віктор Євгенович |
              kryzhnii_v@365.dnu.edu.ua
            </span>
            <span>
              Розробник (Фронтенд): Бондік Іван Олександрович |
              bondik_i@365.dnu.edu.ua
            </span>
          </div>
          <div className='copyright'>© 2025 “YOUR DICTIONARY” | Версія 1.0</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
