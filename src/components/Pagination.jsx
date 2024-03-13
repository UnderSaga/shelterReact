import React from "react";
import PetCard from "./PetCard";

const Pagination = ({ cards }) => {
  return (
    <div className="gallery">
      {cards.map((card) => (
        <PetCard card={card} key={card.id} />
      ))}
    </div>
  );
};

export default Pagination;
