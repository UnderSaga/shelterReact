import React from "react";
import PetCard from "./PetCard";
import Popup from "./Popup";
import Modal from "./Modal";
import { useState } from "react";
import petsArray from "../assets/data/pets";

function Gallery() {
  const [cards, setCards] = useState(petsArray);

  const [isOpenPopup, setOpenPopup] = useState(false);

  const [isOpenAddModal, setOpenAddModal] = useState(false);

  const [pet, setPet] = useState(petsArray[0]);

  const generatePopup = (id) => {
    setPet(cards.find((n) => n.id == id));

    setOpenPopup(true);
  };

  const addNewCard = (e, newPet) => {
    e.preventDefault();
    setCards([...cards, newPet]);
  };

  const deleteCard = (id) => {
    setCards(cards.filter((n) => n.id != id));
  };

  return (
    <>
      <div className="gallery">
        {cards.map((card, index) => (
          <PetCard
            card={card}
            key={index + 1}
            generatePopup={generatePopup}
            addButton={true}
            deleteCard={deleteCard}
          />
        ))}
        <Popup
          className={`popup ${isOpenPopup ? "active" : ""}`}
          closePopup={() => setOpenPopup(false)}
          pet={pet}
        />
        <Modal
          className={`modal ${isOpenAddModal ? "active" : ""}`}
          addNewCard={addNewCard}
          closeModal={() => setOpenAddModal(false)}
        />
      </div>
      <div className="button_wrapper">
        <button
          className="button button_primary"
          onClick={() => setOpenAddModal(true)}
        >
          Create new card
        </button>
      </div>
    </>
  );
}

export default Gallery;
