import katrine from '../assets/pets/pets-katrine.png'
import jennifer from '../assets/pets/pets-jennifer.png'
import woody from '../assets/pets/pets-woody.png'
import scarlet from '../assets/pets/pets-scarlet.png'
import sophia from '../assets/pets/pets-sophia.png'
import timmy from '../assets/pets/pets-timmy.png'
import charly from '../assets/pets/pets-charly.png'
import freddie from '../assets/pets/pets-freddie.png'

function Pets() {
    return (
        <>
            <section className="our-pets" id="our-pets">
            <div className="container">
                <h3 className="our-pets__header">Our friend who<br />are looking for a house</h3>
                <div className="gallery">
                <div className="pets-slider__card" id="slider-katrine">
                    <img src={katrine} alt="Katrine" />
                    <h4 className="card__title">Katrine</h4>
                    <button className="button button_secondary">Learn more</button>
                </div>
                <div className="pets-slider__card" id="slider-jennifer">
                    <img src={jennifer} alt="Jennifer" />
                    <h4 className="card__title">Jennifer</h4>
                    <button className="button button_secondary">Learn more</button>
                </div>
                <div className="pets-slider__card" id="slider-woody">
                    <img src={woody} alt="Woody" />
                    <h4 className="card__title">Woody</h4>
                    <button className="button button_secondary">Learn more</button>
                </div>
                <div className="pets-slider__card" id="slider-sophia">
                    <img src={sophia} alt="Sophia" />
                    <h4 className="card__title">Sophia</h4>
                    <button className="button button_secondary">Learn more</button>
                </div>
                <div className="pets-slider__card" id="slider-timmy">
                    <img src={timmy} alt="Timmy" />
                    <h4 className="card__title">Timmy</h4>
                    <button className="button button_secondary">Learn more</button>
                </div>
                <div className="pets-slider__card" id="slider-charly">
                    <img src={charly} alt="Charly" />
                    <h4 className="card__title">Charly</h4>
                    <button className="button button_secondary">Learn more</button>
                </div>
                <div className="pets-slider__card" id="slider-scarlett">
                    <img src={scarlet} alt="Scarlet" />
                    <h4 className="card__title">Scarlet</h4>
                    <button className="button button_secondary">Learn more</button>
                </div>
                <div className="pets-slider__card" id="slider-freddie">
                    <img src={freddie} alt="Freddie" />
                    <h4 className="card__title">Freddie</h4>
                    <button className="button button_secondary">Learn more</button>
                </div>
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