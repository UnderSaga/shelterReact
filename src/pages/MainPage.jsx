import { Link } from 'react-router-dom';
import PetCard from '../components/PetCard';

import start_screen_puppy from '../assets/pets/start-screen-puppy.png';
import about_puppy from '../assets/pets/about-pets.png'
import donation_dog from '../assets/pets/donation-dog.png'
import katrine from '../assets/pets/pets-katrine.png'
import jennifer from '../assets/pets/pets-jennifer.png'
import woody from '../assets/pets/pets-woody.png'
import food from '../assets/icons/icon-pet-food.svg';
import transportation from '../assets/icons/icon-transportation.svg';
import toys from '../assets/icons/icon-toys.svg';
import cups from '../assets/icons/icon-bowls-and-cups.svg';
import shampoos from '../assets/icons/icon-shampoos.svg';
import vitamins from '../assets/icons/icon-vitamins.svg';
import medicines from '../assets/icons/icon-medicines.svg';
import collars from '../assets/icons/icon-collars-leashes.svg';
import sleeping from '../assets/icons/icon-sleeping-area.svg';
import card from '../assets/icons/credit-card.svg'

function MovePage(path) {
	window.location.href = path;
}

function MainPage() {
	return (
		<>
			<section className="start-page">
				<div className='container'>
					<div className="start-page__content">
						<h2>Not only people need a house</h2>
						<p>We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will love you more than anybody else in the world, you will see!</p>
						<button className="button button_primary">Make a friend</button>
					</div>
					<div className="start-page__img">
						<img src={start_screen_puppy} alt="Puppy" />
					</div>
				</div>
			</section>
			<section className='about' id='about'>
				<div className='container'>
					<div className="about__img">
						<img src={about_puppy} alt="Puppy" />
					</div>
					<div className="about__content">
						<h2>About the shelter “Cozy House”</h2>
						<p>Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20% of them will find a family. The others will continue to live with us and will be waiting for a lucky chance to become dearly loved.</p>
						<p>We feed our wards with the best food and make sure that they do not get sick, feel comfortable (including psychologically) and well. We are supported by 87 volunteers and 28 employees of various skill levels. About 12% of the animals are taken by the shelter staff. Taking care of the animals, they become attached to the pets and would hardly ever leave them alone.</p>
					</div>
				</div>
			</section>
			<section className='our-pets'>
				<div className="container">
					<h3 className="our-pets__header">Our friend who<br />are looking for a house</h3>
					<div className="slider">
						<div className="slider__arrow-button_back">
							<button className="button button_round button_back"><strong>&larr;</strong></button>
						</div>
						<div className="slider__cards">
							<PetCard id='slider-katrine' name='Katrine' img={katrine} />
							<PetCard id='slider-jennifer' name='Jennifer' img={jennifer} />
							<PetCard id='slider-woody' name='Woody' img={woody} />
						</div>
						<div className="slider__arrow-button_forward">
							<button className="button button_round button_forward"><strong>&rarr;</strong></button>
						</div>
					</div>
					<Link className="button button_primary" to='/pets' >Get to know the rest</Link>
				</div>
			</section>
			<section className='help' id='help'>
				<div className='container'>
					<h3 className="help__header">How you can help<br />our shelter</h3>
					<div className="icon-list">
						<div className="icon-list__item">
							<img src={food} alt="Корм" />
							<p>Pet food</p>
						</div>
						<div className="icon-list__item">
							<img src={transportation} alt="Переноска" />
							<p>Transportation</p>
						</div>
						<div className="icon-list__item">
							<img src={toys} alt="Мячик" />
							<p>Toys</p>
						</div>
						<div className="icon-list__item">
							<img src={cups} alt="Миска" />
							<p>Bowls and cups</p>
						</div>
						<div className="icon-list__item">
							<img src={shampoos} alt="Шампунь" />
							<p>Shampoos</p>
						</div>
						<div className="icon-list__item">
							<img src={vitamins} alt="Витамины" />
							<p>Vitamins</p>
						</div>
						<div className="icon-list__item">
							<img src={medicines} alt="Таблетки" />
							<p>Medicines</p>
						</div>
						<div className="icon-list__item">
							<img src={collars} alt="Ошейник" />
							<p>Collars / leashes</p>
						</div>
						<div className="icon-list__item">
							<img src={sleeping} alt="Лежанка" />
							<p>Sleeping area</p>
						</div>
					</div>
				</div>
			</section>
			<section className='donation'>
				<div className="container">
					<div className="donation__img">
					<img src={donation_dog} alt="Щенок" />
					</div>
					<div className="donation-content">
						<div className="donation-content__header">
							<h3>You can also<br /> make a donation</h3><br />
							<h5>Name of the blank / Type of bank account</h5>
						</div>
						<div className="donation-content__credit-card">
							<button className="button credit-card" onClick={() => MovePage('#')}><img src={card} className="card_img" alt="Кредитная карта" />8380 2880 8028 8791 7435</button>
						</div>
						<div className="donation-content__text">
							<p><small>Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus.</small></p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default MainPage;