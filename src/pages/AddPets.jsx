import React from "react";
import Gallery from "../components/Gallery";
import { useState } from "react";
import petsArray from "../assets/data/pets";

function AddPets() {
  const [cards, setCards] = useState(petsArray);

  return (
    <section className="our-pets" id="our-pets">
      <div className="container">
        <h3 className="our-pets__header">
          Our friend who
          <br />
          are looking for a house
        </h3>
        <Gallery cards={cards} />
      </div>
    </section>
  );
}

export default AddPets;
