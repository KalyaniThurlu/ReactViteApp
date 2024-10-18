
import './carousel.css'; 
import { useState } from 'react';

export function CarouselSlider() {
  const items = [
    { img: "https://images.unsplash.com/photo-1529653762956-b0a27278529c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9iaWxlJTIwaW1hZ2VzJTIwYmVhdGlmdWx8ZW58MHx8MHx8fDA%3D=Slider+1", name: "Slide 1" },
    { img: "https://images.unsplash.com/photo-1515865404355-ddb5b0910878?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VycyUyMGltYWdlcyUyMGJlYXRpZnVsfGVufDB8fDB8fHww=Slide+2", name: "Slide 2" },
    { img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb3dlcnMlMjBpbWFnZXMlMjBiZWF0aWZ1bCUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D=Slide+3", name: "Slide 3" },
    { img: "https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.webp?a=1&b=1&s=612x612&w=0&k=20&c=ItI0Ytk3vS_4cPMbXNfxPD148T68tB73sZNquefJnnY=", name: "Slide 4" },
    { img: "https://media.istockphoto.com/id/1187325727/photo/reverse-waterfall-nasik-maharashtra-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=N8AgM_55n2e3z-7miVsxSag0Yg-5Qm7O228-jhkG24E=", name: "Slider 5" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length); 
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length); 
  };

  return (
    <div className="carousel">
      <h1>Carousel Images</h1>
      <button className="prev" onClick={prevSlide}>&lt;</button>
      <div className="carousel-images" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <img key={index} src={item.img} alt={item.name} />
        ))}
      </div>
      <button className="next" onClick={nextSlide}>&gt;</button>
    </div>
  );
};
