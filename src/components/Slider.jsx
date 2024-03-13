import React from "react";
import PetCard from "./PetCard";

const Slider = ({cards, count}) => {

    let data = Array.from(cards)

    return (
        <div className="slider__cards">
            {data.map(card => <PetCard card={card} key={card.id} />)}
        </div>
    )
}

export default Slider;