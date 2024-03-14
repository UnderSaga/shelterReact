import { Link } from "react-router-dom";
import { useState } from "react";
import Slider from "../components/Slider";
import petsArray from "../assets/data/pets";
import ICONS from "../constants/icons";
import PETS_IMG from "../constants/petsImg";

function MainPage() {
  function MovePage(path) {
    window.location.href = path;
  }

  const count = 3;

  const [visibleCards, setVisible] = useState(petsArray.slice(0, count));
  const [invisibleCards, setInvisible] = useState(petsArray.slice(count));
  const [leftCards, setLeft] = useState(invisibleCards.slice(-count));
  const [rightCards, setRight] = useState(invisibleCards.slice(0, count));

  const [cards, setCards] = useState(visibleCards);

  const changeCards = (direction) => {
    if (direction === "right") {
      setLeft(visibleCards);
      setVisible(rightCards);
      setInvisible(petsArray.filter((item) => !visibleCards.includes(item)));
      setRight(shuffleArray(invisibleCards).slice(0, count));
    }

    if (direction === "left") {
      setRight(visibleCards);
      setVisible(leftCards);
      setInvisible(petsArray.filter((item) => !visibleCards.includes(item)));
      setLeft(shuffleArray(invisibleCards).slice(0, count));
    }

    setCards(visibleCards);
  };

  function shuffleArray(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  return (
    <>
      <section className="start-page">
        <div className="container">
          <div className="start-page__content">
            <h2>Not only people need a house</h2>
            <p>
              We offer to give a chance to a little and nice puppy with an
              extremely wide and open heart. He or she will love you more than
              anybody else in the world, you will see!
            </p>
            <button
              className="button button_primary"
              onClick={() => {
                MovePage("#pets");
              }}
            >
              Make a friend
            </button>
          </div>
          <div className="start-page__img">
            <img src={PETS_IMG.START_PUPPY} alt="Puppy" />
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="container">
          <div className="about__img">
            <img src={PETS_IMG.ABOUT_PETS} alt="Puppy" />
          </div>
          <div className="about__content">
            <h2>About the shelter “Cozy House”</h2>
            <p>
              Currently we have 121 dogs and 342 cats on our hands and
              statistics show that only 20% of them will find a family. The
              others will continue to live with us and will be waiting for a
              lucky chance to become dearly loved.
            </p>
            <p>
              We feed our wards with the best food and make sure that they do
              not get sick, feel comfortable (including psychologically) and
              well. We are supported by 87 volunteers and 28 employees of
              various skill levels. About 12% of the animals are taken by the
              shelter staff. Taking care of the animals, they become attached to
              the pets and would hardly ever leave them alone.
            </p>
          </div>
        </div>
      </section>
      <section className="our-pets" id="pets">
        <div className="container">
          <h3 className="our-pets__header">
            Our friend who
            <br />
            are looking for a house
          </h3>
          <div className="slider">
            <div className="slider__arrow-button_back">
              <button
                className="button button_round button_back"
                onClick={() => changeCards("left")}
              >
                <strong>&larr;</strong>
              </button>
            </div>
            <Slider cards={cards} count={count} />
            <div className="slider__arrow-button_forward">
              <button
                className="button button_round button_forward"
                onClick={() => changeCards("right")}
              >
                <strong>&rarr;</strong>
              </button>
            </div>
          </div>
          <Link
            className="button button_primary"
            to="/pets"
            onClick={() => window.scrollTo(0, 0)}
          >
            Get to know the rest
          </Link>
        </div>
      </section>
      <section className="help" id="help">
        <div className="container">
          <h3 className="help__header">
            How you can help
            <br />
            our shelter
          </h3>
          <div className="icon-list">
            <div className="icon-list__item">
              <img src={ICONS.FOOD} alt="Корм" />
              <p>Pet food</p>
            </div>
            <div className="icon-list__item">
              <img src={ICONS.TRANSPORTATION} alt="Переноска" />
              <p>Transportation</p>
            </div>
            <div className="icon-list__item">
              <img src={ICONS.TOYS} alt="Мячик" />
              <p>Toys</p>
            </div>
            <div className="icon-list__item">
              <img src={ICONS.CUPS} alt="Миска" />
              <p>Bowls and cups</p>
            </div>
            <div className="icon-list__item">
              <img src={ICONS.SHAMPOOS} alt="Шампунь" />
              <p>Shampoos</p>
            </div>
            <div className="icon-list__item">
              <img src={ICONS.VITAMINS} alt="Витамины" />
              <p>Vitamins</p>
            </div>
            <div className="icon-list__item">
              <img src={ICONS.MEDICINES} alt="Таблетки" />
              <p>Medicines</p>
            </div>
            <div className="icon-list__item">
              <img src={ICONS.COLLARS} alt="Ошейник" />
              <p>Collars / leashes</p>
            </div>
            <div className="icon-list__item">
              <img src={ICONS.SLEEPING} alt="Лежанка" />
              <p>Sleeping area</p>
            </div>
          </div>
        </div>
      </section>
      <section className="donation">
        <div className="container">
          <div className="donation__img">
            <img src={PETS_IMG.DONATION_DOG} alt="Щенок" />
          </div>
          <div className="donation-content">
            <div className="donation-content__header">
              <h3>
                You can also
                <br /> make a donation
              </h3>
              <br />
              <h5>Name of the blank / Type of bank account</h5>
            </div>
            <div className="donation-content__credit-card">
              <button
                className="button credit-card"
                onClick={() => MovePage("#")}
              >
                <img
                  src={ICONS.CARD}
                  className="card_img"
                  alt="Кредитная карта"
                />
                8380 2880 8028 8791 7435
              </button>
            </div>
            <div className="donation-content__text">
              <p>
                <small>
                  Legal information and lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Maecenas a ipsum at libero sagittis dignissim
                  sed ac diam. Praesent ultrices maximus tortor et vulputate.
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </small>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainPage;
