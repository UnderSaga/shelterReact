import React, { useState } from "react";
import ICONS from "../constants/icons";

function Modal({ className, closeModal, addNewCard }) {
  const [newPet, setNewPet] = useState({
    id: Date.now(),
    name: "",
    type: "",
    breed: "",
    img: "",
    age: "",
    description: "",
    inoculations: "none",
    diseases: "none",
    parasites: "none",
  });

  const closeAndAdd = (e) => {
    addNewCard(e, newPet);
    closeModal();
    setNewPet({
      id: Date.now(),
      name: "",
      type: "",
      breed: "",
      img: "",
      age: "",
      description: "",
      inoculations: "none",
      diseases: "none",
      parasites: "none",
    });
  };

  return (
    <div className={className}>
      <div className="container">
        <button
          className="popup__close-button button button_round"
          onClick={closeModal}
        >
          <img src={ICONS.CLOSE_BUTTON} alt="X" />
        </button>
        <div>
          <form className="modal__body">
            <input
              id="pet__name"
              value={newPet.name}
              onChange={(e) => setNewPet({ ...newPet, name: e.target.value })}
              type="text"
              placeholder="Pet name"
            />
            <input
              id="pet__type"
              value={newPet.type}
              onChange={(e) => setNewPet({ ...newPet, type: e.target.value })}
              type="text"
              placeholder="Pet type"
            />
            <input
              id="pet__breed"
              value={newPet.breed}
              onChange={(e) => setNewPet({ ...newPet, breed: e.target.value })}
              type="text"
              placeholder="Pet breed"
            />
            <input
              id="pet__img"
              value={newPet.img}
              onChange={(e) => setNewPet({ ...newPet, img: e.target.value })}
              type="text"
              placeholder="Pet photo(link)"
            />
            <input
              id="pet__age"
              value={newPet.age}
              onChange={(e) => setNewPet({ ...newPet, age: e.target.value })}
              type="text"
              placeholder="Pet age"
            />
            <input
              id="pet__description"
              value={newPet.description}
              onChange={(e) =>
                setNewPet({ ...newPet, description: e.target.value })
              }
              type="text"
              placeholder="Pet description"
            />
            <input
              id="pet__inoculations"
              value={newPet.inoculations}
              onChange={(e) =>
                setNewPet({ ...newPet, inoculations: e.target.value })
              }
              type="text"
              placeholder="Pet inoculations"
            />
            <input
              id="pet__diseases"
              value={newPet.diseases}
              onChange={(e) =>
                setNewPet({ ...newPet, diseases: e.target.value })
              }
              type="text"
              placeholder="Pet diseases"
            />
            <input
              id="pet__parasites"
              value={newPet.parasites}
              onChange={(e) =>
                setNewPet({ ...newPet, parasites: e.target.value })
              }
              type="text"
              placeholder="Pet parasites"
            />

            <button
              className="button button_primary"
              onClick={(e) => closeAndAdd(e)}
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
