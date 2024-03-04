import { Link, Outlet } from 'react-router-dom';
import pin from '../assets/icons/pin.svg';
import mail from '../assets/icons/icon-email.svg';
import phone from '../assets/icons/icon-phone.svg';
import puppy from '../assets/pets/footer-puppy.png'

function Layout() {
    return (
        <>
            <header>
                <div className="container">
                    <Link className="header-logo" to='#'>
                        <h2 className="logo__title">Cozy House</h2>
                        <p className="logo__subtitle">Shelter for pets in Boston</p>
                    </Link>
                    <nav> 
                        <ul className='navigation__list'>
                            <li className="link link_active"><Link to="/">About the shelter</Link></li>
                            <li className="link"><Link to="/pets">Our pets</Link></li>
                            <li className="link"><a href="#help">Help the shelter</a></li>
                            <li className="link"><a href="#footer">Contacts</a></li>
                        </ul>
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
        </>
    )
}

export default Layout