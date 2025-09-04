import React, { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

//backend link
const BASE_URL = "http://localhost:5000/cards";

export default function CardList() {
  const [cards, setCards] = useState([]); // store backend ekn fetch krpu data  cards
  const [isLoading, setIsLoading] = useState(true); //loading
  const [error, setError] = useState(null); //errors if fetch fails

  useEffect(() => {
    //componenet eka update wela thiyenawanm meka run wenawa
    const fetchCards = async () => {
      //async dammama server eka load wenkal innwa
      try {
        const response = await fetch(BASE_URL); // get data from backend
        if (!response.ok) throw new Error("Failed to fetch data");
        //true if response is ok=>error ekk awe nathi unama
        const data = await response.json(); // convert to JavaScript
        setCards(data); // stste eka update krnawa(data fetch unama ewa store krnwa)
      } catch (err) {
        setError(err.message); // save error message
      } finally {
        setIsLoading(false); // stop loading
      }
    };

    fetchCards(); //dan define krpu ekata cal krnwa
  }, []); // empty [] = run only once

  // Show loading
  if (isLoading) return <div>Loading...</div>;

  // Show error
  if (error) return <div>Error: {error}</div>;

  // Show all cards
  return (
    <div>
      {cards.map(
        (
          card //loopeka(map krnwa) through cards array
        ) => (
          <div key={card.id}>
            <img src={card.image} alt={card.title} />
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <p>{card.id}</p>

            <h3>{card.clinicnumber}</h3>
            <QRCodeCanvas
              value={`http://localhost:3000/card/${card.id}`}
              size={100}
            />
          </div>
        )
      )}
      <button className="regme">Register Me</button>
    </div>
  );
}

// const cards = [
//   {
//     id: 1,
//     title: "My First Card",
//     description: "This is the description of the first card.",
//     image: "https://picsum.photos/id/101/200/150"
//   },
//   {
//     id: 2,
//     title: "My Second Card",
//     description: "This is the description of the second card.",
//     image: "https://picsum.photos/id/102/200/150"
//   },
//   {
//     id: 3,
//     title: "My Third Card",
//     description: "This is the description of the third card.",
//     image: "https://picsum.photos/id/103/200/150"
//   }
// ];
//backend ek me wage ekkenna ona
