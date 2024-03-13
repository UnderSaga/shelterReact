import React from "react";
import PetCard from "./PetCard";
import Popup from "./Popup.jsx";
import petsArray from "../assets/data/pets.js";
import { useState } from "react";

const Slider = ({ cards, count }) => {
  const [isOpenPopup, setOpenPopup] = useState(false);

  const [pet, setPet] = useState(petsArray[0]);

  const closePopup = () => {
    setOpenPopup(false);
  };

  const generatePopup = (id) => {
    setPet(petsArray.find((n) => n.id == id));

    setOpenPopup(true);
  };

  return (
    <div className="slider__cards">
      {cards.map((card) => (
        <PetCard card={card} key={card.id} generatePopup={generatePopup} />
      ))}
      <Popup
        className={`popup ${isOpenPopup ? "active" : ""}`}
        closePopup={closePopup}
        pet={pet}
      />
    </div>
  );
};

export default Slider;
