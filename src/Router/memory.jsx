

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