import petsArray from "../assets/data/pets";
import Pagination from "../components/Pagination";
import { useEffect, useState } from "react";

const pagesArray = [];

for (let i = 0; i < 17; i += 1) {
  pagesArray[i] = [];
  shuffleArray(pagesArray[i]);
}

function shuffleArray(array) {
  while (array.length < 8) {
    let randomNum = Math.floor(Math.random() * (9 - 1));

    if (array.indexOf(petsArray[randomNum]) == -1) {
      array.push(petsArray[randomNum]);
    }
  }
  return array;
}

function Pets() {
  const [pageNum, setPageNum] = useState(0);

  const [maxPages, setMaxPages] = useState(6);

  const [cards, setCards] = useState(pagesArray[0]);

  function changePage(direction) {
    switch (direction) {
      case "first":
        setPageNum(0);
        setCards(pagesArray[pageNum]);
        break;
      case "back":
        setPageNum(pageNum - 1);
        setCards(pagesArray[pageNum]);
        break;
      case "forward":
        setPageNum(pageNum + 1);
        setCards(pagesArray[pageNum]);
        break;
      case "last":
        setPageNum(maxPages - 1);
        setCards(pagesArray[pageNum]);
        break;
    }
  }

  useEffect(() => {
    function resize() {
      switch (true) {
        case window.innerWidth > 992:
          setMaxPages(6);
          break;
        case window.innerWidth > 679:
          setMaxPages(8);
          break;
        default:
          setMaxPages(16);
          break;
      }

      if (pageNum > maxPages) {
        setPageNum(maxPages);
      }
    }

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="our-pets" id="our-pets">
      <div className="container">
        <h3 className="our-pets__header">
          Our friend who
          <br />
          are looking for a house
        </h3>
        <Pagination cards={cards} />
        <div className="pagination">
          <button
            className={`button button_round ${pageNum > 0 ? "" : "disabled"}`}
            onClick={() => changePage("first")}
          >
            &lt;&lt;
          </button>
          <button
            className={`button button_round ${pageNum > 0 ? "" : "disabled"}`}
            onClick={pageNum > 0 ? () => changePage("back") : () => {}}
          >
            &lt;
          </button>
          <button className="button button_round button_selected">
            {pageNum + 1}
          </button>
          <button
            className={`button button_round ${
              pageNum < maxPages - 1 ? "" : "disabled"
            }`}
            onClick={
              pageNum < maxPages - 1 ? () => changePage("forward") : () => {}
            }
          >
            &gt;
          </button>
          <button
            className={`button button_round ${
              pageNum < maxPages - 1 ? "" : "disabled"
            }`}
            onClick={() => changePage("last")}
          >
            &gt;&gt;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Pets;
