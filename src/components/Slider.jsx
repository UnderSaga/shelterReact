import React from "react";
import PetCard from "./PetCard";

const Slider = ({cards, count}) => {

    return (
        <div className="slider__cards">
            {cards.map(card => <PetCard card={card} key={card.id} />)}
        </div>
    )
}

export default Slider;