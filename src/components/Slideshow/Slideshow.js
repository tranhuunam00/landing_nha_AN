import React, { useState, useEffect } from "react";
import "./Slideshow.css";
import { ImgApps } from "../../constant/images";

const images = [
  ImgApps.a1,
  // ImgApps.a2,
  // "https://vcdn1-vnexpress.vnecdn.net/2023/08/22/ngoai-ngu-7513-1692670691.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=4TM-Of8vcg6pGJn4AkLfiA",
];

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default Slideshow;
