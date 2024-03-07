import katrine from '../assets/pets/pets-katrine.png'
import jennifer from '../assets/pets/pets-jennifer.png'
import woody from '../assets/pets/pets-woody.png'
import scarlet from '../assets/pets/pets-scarlet.png'
import sophia from '../assets/pets/pets-sophia.png'
import timmy from '../assets/pets/pets-timmy.png'
import charly from '../assets/pets/pets-charly.png'
import freddie from '../assets/pets/pets-freddie.png'
import PetCard from '../components/PetCard'

function Pets() {
	return (
		<>
			<section className="our-pets" id="our-pets">
				<div className="container">
					<h3 className="our-pets__header">Our friend who<br />are looking for a house</h3>
					<div className="gallery">
						<PetCard id={"slider-katrine"} className={"pets-slider__card"} img={katrine} name={'Katrine'} />
						<PetCard id={"slider-jennifer"} className={"pets-slider__card"} img={jennifer} name={'Jennifer'} />
						<PetCard id={"slider-woody"} className={"pets-slider__card"} img={woody} name={'Woody'} />
						<PetCard id={"slider-sophia"} className={"pets-slider__card"} img={sophia} name={'Sophia'} />
						<PetCard id={"slider-timmy"} className={"pets-slider__card"} img={timmy} name={'Timmy'} />
						<PetCard id={"slider-charly"} className={"pets-slider__card"} img={charly} name={'Charly'} />
						<PetCard id={"slider-scarlett"} className={"pets-slider__card"} img={scarlet} name={'Scarlet'} />
						<PetCard id={"slider-freddie"} className={"pets-slider__card"} img={freddie} name={'Freddie'} />
					</div>
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