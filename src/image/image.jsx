
import { useState } from "react";

import "./image.css"

const images = [
    'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg', 
    'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
    'https://images.pexels.com/photos/1619311/pexels-photo-1619311.jpeg', 
    'https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg', 
    'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg', 
    'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg', 
    
];

export function Eximage() {
    const [selectedImage, setSelectedImage] = useState(null);

    const openImage = (img) => {
        setSelectedImage(img);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    return (
        <div className="gallery-container">
            <h2> Image Gallery</h2>
            <div className="image-grid">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Gallery ${index}`}
                        onClick={() => openImage(img)}
                    />
                ))}
            </div>

            
            {selectedImage && (
  <div className="modal" onClick={closeImage}>
    <div className="modal-content">
      <span className="bi bi-x close" onClick={closeImage}></span>
      <img src={selectedImage} alt="Enlarged" />
    </div>
  </div>
)}

        </div>
    );
}
