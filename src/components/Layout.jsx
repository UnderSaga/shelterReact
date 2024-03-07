import { NavLink, Link, Outlet } from 'react-router-dom';
import pin from '../assets/icons/pin.svg';
import mail from '../assets/icons/icon-email.svg';
import phone from '../assets/icons/icon-phone.svg';
import puppy from '../assets/pets/footer-puppy.png';
import close_button from '../assets/icons/close-button.svg';

function Layout() {

  const mainHeader = 'main-header';
  const petsHeader = 'pets-header';

  let navigation = document.querySelector('.navigation');

  function burgerMenuOpen() {
    
    const burgerMenu = document.querySelector('.hamburger');
    const navigationContainer = document.querySelector('.navigation__container');

    navigation = document.querySelector('.navigation');

    burgerMenu.classList.toggle('active');
    navigation.classList.toggle('active');
    navigationContainer.classList.toggle('active');
    document.body.classList.toggle('lock');
    
    navigation.addEventListener('click', () => {
      burgerMenu.classList.remove('active');
      navigation.classList.remove('active');
      navigationContainer.classList.remove('active');
      document.body.classList.remove('lock');
    });
  }

  function closePopup() {
    const popup = document.querySelector('.popup');

    popup.classList.remove('active');
    document.body.classList.remove('popup-lock');
  }

  function changeHeader(headerClass) {

  const header = document.querySelector('header'); 
  navigation = document.querySelector('.navigation'); 

    if(headerClass == mainHeader) {
      navigation.classList.remove('pets-navigation');
      header.classList.remove(petsHeader);
    } 
    if(headerClass == petsHeader) {
      navigation.classList.add('pets-navigation');
      header.classList.remove(mainHeader);
    }

    header.classList.add(headerClass);

  }

  return (
    <>
      <header className={mainHeader}>
        <div className="container">
          <Link className="header-logo" to='/' onClick={() => changeHeader(mainHeader) }>
            <h2 className="logo__title">Cozy House</h2>
            <p className="logo__subtitle">Shelter for pets in Boston</p>
          </Link>
          <div className="hamburger" onClick={burgerMenuOpen}>
            <span></span>
          </div>
          <nav className="navigation index__navigation"> 
            <div className="navigation__container">
              <ul className='navigation__list'>
                <li className="link"><NavLink className='main-link' to="/" onClick={() => changeHeader(mainHeader)} >About the shelter</NavLink></li>
                <li className="link"><NavLink className='pets-link' to="/pets" onClick={() => changeHeader(petsHeader)} >Our pets</NavLink></li>
                <li className="link"><a href="#help">Help the shelter</a></li>
                <li className="link"><a href="#footer">Contacts</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <div className="container" id='footer'>
          <div className="footer-content">
            <div className="contacts">
              <h3 className="footer__header">For questions<br />and suggestions</h3>
              <div className="contacts__email">
                <img src={mail} alt="Письмо" />
                <a className="footer__link" href="https://mail.google.com/mail/u/0/#inbox">email@shelter.com</a>
              </div>
              <div className="contacts__phone">
                <img src={phone} alt="Телефон" />
                <a className="footer__link" href="https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/b0bb3761-52cf-41fe-bbb0-aa7fb7d00004/2968238131/fake-call-pro-incoming-call-simulator-screenshot.png">+13 674 567 75 54</a>
              </div>
              </div>
              <div className="adress">
              <h3 className="footer__header">We are waiting<br />for your visit</h3>
              <div className="adress__boston">
                <img src={pin} alt="Маркер" />
                <a className="footer__link" href="https://www.google.com/maps/place/%D0%A1%D0%BE%D0%BA%D0%B5%D1%80%D0%BA%D0%B8%D0%BD%D0%BE/@57.7972993,41.0396336,13z/data=!4m6!3m5!1s0x46ad4fe225c8c327:0x7478b783ddf3c38a!8m2!3d57.8076587!4d41.0132407!16s%2Fm%2F0273489?entry=ttu">1 Central Street, Boston<br />
                (entrance from the store)</a>
              </div>
              <div className="adress__london">
                <img src={pin} alt="Маркер" />
                <a className="footer__link" href="https://www.google.com/maps/place/%D0%9A%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%BC%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D0%BD%D0%B0%D1%8F+%D0%BF%D1%81%D0%B8%D1%85%D0%B8%D0%B0%D1%82%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F+%D0%B1%D0%BE%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D0%B0/@57.7856793,41.0964535,13z/data=!4m6!3m5!1s0x46ad4932c6a68807:0x3f82a359df1285c7!8m2!3d57.8045284!4d41.1147897!16s%2Fg%2F11c20sqmsx?entry=ttu">18 South Park, London</a>
              </div>
            </div>
          </div>
          <div className="footer__img">
              <img src={puppy} alt="Щенок" />
          </div>
        </div>
      </footer>
      <div className="popup" onClick={closePopup}>
        <div className="container">
          <button className="popup__close-button button button_round" onClick={closePopup}>
              <img src={close_button} alt="X" />
          </button>
          <div className="popup__body">
            <div className="popup__img-container">
              <img className="popup__img" src="img/pets/pets-jennifer.png" alt="Katrine" />
            </div>
            <div className="popup__content">
            <div className="popup__header">
              <h3 className="popup__title">Jennifer</h3>
              <h4 className="popup__subtitle">Dog - Labrador</h4>
            </div>
            <div>
              <p className="popup__text">Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.</p>
            </div>
              <ul className="popup__list">
                  <li><p><b>Age: </b></p><p className="popup__age">2 months</p></li>
                  <li><p><b>Incolucations:</b></p><p className="popup__incolucations">none</p></li>
                  <li><p><b>Diseases:</b></p><p className="popup__diseases">none</p></li>
                  <li><p><b>Parasites:</b></p><p className="popup__parasites">none</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout