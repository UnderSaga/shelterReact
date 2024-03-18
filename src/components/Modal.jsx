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
              value={newPet.name}
              onChange={(e) => setNewPet({ ...newPet, name: e.target.value })}
              type="text"
              placeholder="Pet name"
            />
            <input
              value={newPet.type}
              onChange={(e) => setNewPet({ ...newPet, type: e.target.value })}
              type="text"
              placeholder="Pet type"
            />
            <input
              value={newPet.breed}
              onChange={(e) => setNewPet({ ...newPet, breed: e.target.value })}
              type="text"
              placeholder="Pet breed"
            />
            <input
              value={newPet.img}
              onChange={(e) => setNewPet({ ...newPet, img: e.target.value })}
              type="text"
              placeholder="Pet photo(link)"
            />
            <input
              value={newPet.age}
              onChange={(e) => setNewPet({ ...newPet, age: e.target.value })}
              type="text"
              placeholder="Pet age"
            />
            <input
              value={newPet.description}
              onChange={(e) =>
                setNewPet({ ...newPet, description: e.target.value })
              }
              type="text"
              placeholder="Pet description"
            />
            <input
              value={newPet.inoculations}
              onChange={(e) =>
                setNewPet({ ...newPet, inoculations: e.target.value })
              }
              type="text"
              placeholder="Pet inoculations"
            />
            <input
              value={newPet.diseases}
              onChange={(e) =>
                setNewPet({ ...newPet, diseases: e.target.value })
              }
              type="text"
              placeholder="Pet diseases"
            />
            <input
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
