function PetCard(props) {
  return (
    <>
      <div
        className="slider__card"
        id={props.card.id}
        onClick={() => props.generatePopup(props.card.id)}
      >
        <img src={props.card.img} alt={props.card.name} />
        <h4 className="card__title">{props.card.name}</h4>
        <button className="button button_secondary">Learn more</button>
      </div>
    </>
  );
}

export default PetCard;
