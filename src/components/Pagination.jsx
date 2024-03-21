import React from "react";
import PetCard from "./PetCard";
import { useState } from "react";
import Popup from "./Popup.jsx";
import petsArray from "../assets/data/pets";

const Pagination = ({ cards }) => {
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
    <div className="gallery">
      {cards.map((card) => (
        <PetCard
          card={card}
          key={card.id}
          generatePopup={generatePopup}
          addButton={false}
        />
      ))}
      <Popup
        className={`popup ${isOpenPopup ? "active" : ""}`}
        closePopup={closePopup}
        pet={pet}
      />
    </div>
  );
};

export default Pagination;
