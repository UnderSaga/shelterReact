import React from "react";
import close_button from "../assets/icons/close-button.svg";

function Popup({ className, closePopup, pet }) {
  return (
    <div className={className} onClick={closePopup}>
      <div className="container">
        <button
          className="popup__close-button button button_round"
          onClick={closePopup}
        >
          <img src={close_button} alt="X" />
        </button>
        <div className="popup__body">
          <div className="popup__img-container">
            <img className="popup__img" src={pet.img} alt={pet.name} />
          </div>
          <div className="popup__content">
            <div className="popup__header">
              <h3 className="popup__title">{pet.name}</h3>
              <h4 className="popup__subtitle">
                {pet.type} - {pet.breed}
              </h4>
            </div>
            <div>
              <p className="popup__text">{pet.description}</p>
            </div>
            <ul className="popup__list">
              <li>
                <p>
                  <b>Age: </b>
                </p>
                <p className="popup__age">{pet.age}</p>
              </li>
              <li>
                <p>
                  <b>Incolucations:</b>
                </p>
                <p className="popup__incolucations">{pet.incolucations}</p>
              </li>
              <li>
                <p>
                  <b>Diseases:</b>
                </p>
                <p className="popup__diseases">{pet.diseases}</p>
              </li>
              <li>
                <p>
                  <b>Parasites:</b>
                </p>
                <p className="popup__parasites">{pet.parasites}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
