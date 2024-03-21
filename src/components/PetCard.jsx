import React from "react";

function PetCard({ card, ...props }) {
  return (
    <div className="slider__card" id={card.id}>
      <img src={card.img} alt={card.name} />
      <h4 className="card__title">{card.name}</h4>
      <button
        className="button button_secondary button_add"
        onClick={() => props.generatePopup(card.id)}
      >
        Learn more
      </button>
      <button
        className={`button button_secondary ${
          props.addButton === true ? "button_delete" : "none"
        }`}
        onClick={() => props.deleteCard(card.id)}
      >
        Delete Pet
      </button>
    </div>
  );
}

export default PetCard;
