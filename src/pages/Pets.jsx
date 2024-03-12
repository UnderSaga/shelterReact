import katrine from '../assets/pets/pets-katrine.png'
import jennifer from '../assets/pets/pets-jennifer.png'
import woody from '../assets/pets/pets-woody.png'
import scarlett from '../assets/pets/pets-scarlet.png'
import sophia from '../assets/pets/pets-sophia.png'
import timmy from '../assets/pets/pets-timmy.png'
import charly from '../assets/pets/pets-charly.png'
import freddie from '../assets/pets/pets-freddie.png'

import Pagination from '../components/Pagination'
import { useState } from 'react'

function Pets() {

	const [cards, setCards] = useState([
		{id: 'slider-katrine', name: 'Katrine', img: katrine},
		{id: 'slider-jennifer', name: 'Jennifer', img: jennifer},
		{id: 'slider-woody', name: 'Woody', img: woody},
		{id: 'slider-scarlett', name: 'Scarlett', img: scarlett},
		{id: 'slider-sophia', name: 'Sophia', img: sophia},
		{id: 'slider-timmy', name: 'Timmy', img: timmy},
		{id: 'slider-charly', name: 'Charly', img: charly},
		{id: 'slider-freddie', name: 'Freddie', img: freddie},
	])

	return (
		<>
			<section className="our-pets" id="our-pets">
				<div className="container">
					<h3 className="our-pets__header">Our friend who<br />are looking for a house</h3>
					<Pagination cards={cards}/>
					<div className="pagination">
						<button className="button button_round" disabled>
								&lt;&lt;
						</button>
						<button className="button button_round" disabled>
								&lt;
						</button>
						<button className="button button_round button_selected">
								1
						</button>
						<button className="button button_round">
								&gt;
						</button>
						<button className="button button_round">
								&gt;&gt;
						</button>
					</div>
				</div>
			</section>
		</>
	);
}

export default Pets;