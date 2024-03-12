import petsArray from '../assets/data/pets.js'

function PetCard(props) {

	return (
		<div className='slider__card' id={props.card.id} onClick={() => generatePopup(props.card.id)}>
			<img src={props.card.img} alt={props.card.name} />
			<h4 className="card__title">{props.card.name}</h4>
			<button className="button button_secondary">Learn more</button>
		</div>
	);

}

function generatePopup(id) {
	let pet = {};
	pet = petsArray.find(n => n.id === id);
	
	document.querySelector('.popup__title').innerHTML = pet.name;
	document.querySelector('.popup__subtitle').innerHTML = pet.type + " - " + pet.breed;
	document.querySelector('.popup__img').setAttribute('src', pet.img);
	document.querySelector('.popup__text').innerHTML = pet.description;
	document.querySelector('.popup__age').innerHTML = pet.age;
	document.querySelector('.popup__incolucations').innerHTML = pet.inoculations;
	document.querySelector('.popup__diseases').innerHTML = pet.diseases;
	document.querySelector('.popup__parasites').innerHTML = pet.parasites;

	showPopup();
}

function showPopup() {
	const popup = document.querySelector('.popup')

	popup.classList.toggle('active');
	document.body.classList.toggle('popup-lock');
}

export default PetCard;