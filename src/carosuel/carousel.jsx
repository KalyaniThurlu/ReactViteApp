
import { useState } from "react";

export function Carousel() {
  const images = [
    "https://img.freepik.com/premium-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg?semt=ais_hybrid",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsEG5Vsz8X1OHRhTQhknJC1itIn8a_unxKVg&s",
    "https://hips.hearstapps.com/hmg-prod/images/vibrant-pink-and-white-summer-flowering-cosmos-royalty-free-image-1653499726.jpg?crop=0.66541xw:1xh;center,top&resize=980",
    "https://hips.hearstapps.com/hmg-prod/images/vibrant-pink-and-white-summer-flowering-cosmos-royalty-free-image-1653499726.jpg?crop=0.66541xw:1xh;center,top&resize=980",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePrevw() {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  function handleNext() {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }

  return (
    <div style={styles.carousel}>
      <h1 style={styles.header}>Carousel</h1>
      <div style={styles.imageContainer}>
        <button onClick={handlePrevw} style={{ ...styles.button,  left: "20px" }}>
        NextButton
        </button>

        <img
          src={images[currentIndex]}
          alt={`image ${currentIndex}`}
          style={styles.image}
        />
        
        <button onClick={handleNext} style={{ ...styles.button,  right: "20px" }}>
          PreviousButton
        </button>
      </div>
    </div>
  );
}

const styles = {
  carousel: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", // Full screen height to center carousel vertically
    textAlign: "center",
    marginLeft: "30px", // Add 30px left margin here
  },
  header: {
    fontSize: "2rem",
    color: "red",
    marginTop:"5%",
    marginBottom: "20px",
    marginLeft:"70%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"

  },
  imageContainer: {
    position: "relative", // Allows positioning of buttons over the image
    display: "flex",
    marginLeft:"100%",
    justifyContent: "center", // Centers the image horizontally
    alignItems: "center", // Centers the image vertically
    width: "100%", // Full width to place buttons correctly
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "purple",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    zIndex: 1, // Ensures buttons are placed above the image
  },
  image: {
    height: "400px",
    width: "600px",
    objectFit: "cover", // Ensures the image covers the container area
  },
};
