import React, { useEffect, useState } from "react";
// import Carousel from "react-bootstrap/Carousel";
import "../../styles/carousel.css";

export const Interval = (props) => {
  const { children, show } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  const [touchPosition, setTouchPosition] = useState(null);

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {/* You can alwas change the content of the button to other things */}
        {currentIndex > 0 && (
          <button onClick={prev} className="left-arrow">
            &lt;
          </button>
        )}
        <div
          className="carousel-content-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className={`carousel-content show-${show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
            }}
          >
            {children}
          </div>
        </div>
        {/* You can alwas change the content of the button to other things */}
        {currentIndex < length - show && (
          <button onClick={next} className="right-arrow">
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

// export const Interval = () => {
//   return (
//     <Carousel className="scroll">
//       <Carousel.Item>
//         <img
//           className="col-3"
//           src="https://video-images.vice.com/articles/597fa3dcb1f73c691f5e88b7/lede/1501537457860-the-photo-full-version-is-76x-higher-resolution.jpeg?crop=1xw:0.6807xh;0xw,0.0586xh"
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h2>First slide label</h2>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="col-3"
//           src="https://www.itl.cat/pngfile/big/187-1878501_a-very-high-resolution-large-format-vast-photo.jpg"
//           alt="Second slide"
//         />
//         <Carousel.Caption>
//           <h2>Second slide label</h2>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="col-3"
//           src="https://vastphotos.com/files/uploads/photos/10150/high-resolution-nature-landscape-l.jpg"
//           alt="Third slide"
//         />
//         <Carousel.Caption>
//           <h2>Third slide label</h2>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// };
