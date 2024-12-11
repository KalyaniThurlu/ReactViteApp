
import { useState } from "react";

export function MemoryGame() {
  const items = [
    { id: 1, image: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png" },
    { id: 2, image: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
    { id: 1, image: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png" },
    { id: 2, image: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
    { id: 3, image: "https://w7.pngwing.com/pngs/452/24/png-transparent-js-logo-node-logos-and-brands-icon.png" },
    { id: 3, image: "https://w7.pngwing.com/pngs/452/24/png-transparent-js-logo-node-logos-and-brands-icon.png" },
    {id:4, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoW3g9hjXIasgon-kpzz-lD9z4SsalyPbZA&s"},
    {id:4, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoW3g9hjXIasgon-kpzz-lD9z4SsalyPbZA&s"},
    {id:5, image:"https://d2jdgazzki9vjm.cloudfront.net/js/nodejs/images/node-js-tutorial.png"},
    
    

    
  ];

  const [cards, setCards] = useState(shuffle(items));
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  // Shuffle cards
  function shuffle(items) {
    return [...items].sort(() => Math.random() );
  }

  // Flip the card
  const handleFlip = (index) => {
    if (flipped.includes(index) || matched.includes(cards[index].id) || flipped.length === 2) {
      return;
    }

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [firstIndex, secondIndex] = newFlipped;
      if (cards[firstIndex].id === cards[secondIndex].id) {
        setMatched([...matched, cards[firstIndex].id]);
      }
      setTimeout(() => setFlipped([]), 1000);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Memory Game</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 100px)", gap: "10px", justifyContent: "center" }}>
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleFlip(index)}
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: flipped.includes(index) || matched.includes(card.id) ? "white" : "blue",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            {flipped.includes(index) || matched.includes(card.id) ? (
              <img src={card.image} alt="card" style={{ width: "80%", height: "80%" }} />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}