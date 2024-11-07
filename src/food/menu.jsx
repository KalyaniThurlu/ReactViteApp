
import { useState } from "react";
import "./menu.css"; // Add custom styles for modal here if needed

export function ExMenu() {
  const [selectedImage, setSelectedImage] = useState(null);

  const menu = [
    {
      type: "Meals",
      price: 30,
      image: "https://media.istockphoto.com/id/1145169012/photo/many-idli-or-idly-and-coconut-chutney-south-indian-breakfast.jpg?s=612x612&w=0&k=20&c=eaGheWxdd81VAxCdpaBaM9BV4-3601dJ-8gr9yP1B4A="
    },
    {
      type: "Pizza",
      price: 50,
      image: "https://media.istockphoto.com/id/645243318/photo/delicious-classic-italian-pizza-pepperoni-with-sausages-and-cheese-mozzarella.jpg?s=612x612&w=0&k=20&c=J3ZWNXmghZu-Wad1anCfplOnW0JoqK1zCD24fMmkt9o="
    },
    {
      type: "Burger",
      price: 60,
      image: "https://www.shutterstock.com/image-photo/classic-hamburger-stock-photo-isolated-600nw-2282033179.jpg"
    }
  ];

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mt-4">
      <h2>Menu</h2>
      <p>Welcome to the menu page! Here you can view the available items.</p>

      {/* Menu items grid layout */}
      <div className="menu-items">
        {menu.map((menuItem, index) => (
          <div key={index} className="menu-item" onClick={() => openImageModal(menuItem.image)}>
            <h4>{menuItem.type}</h4>
            <img
              src={menuItem.image}
              alt={menuItem.type}
              style={{ width: "100%", height: "100px", objectFit: "cover" }}
            />
            <div>
              <strong>Price:</strong> ${menuItem.price}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying large image */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeImageModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeImageModal} className="close-button">X</button>
            <img src={selectedImage} alt="Selected item" />
          </div>
        </div>
      )}
    </div>
  );
}

export default ExMenu;
