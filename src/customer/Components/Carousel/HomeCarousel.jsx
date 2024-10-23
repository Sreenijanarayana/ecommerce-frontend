import React from "react"; //This is the base library to create a React component.
import AliceCarousel from "react-alice-carousel"; //This is a library that provides a ready-to-use carousel component
import "react-alice-carousel/lib/alice-carousel.css";//This imports the CSS required for the AliceCarousel component to work properly.
import { homeCarouselData } from "./HomeCaroselData";//This is an array that contains data for the carousel images and the paths they should navigate to when clicked.
import { useNavigate } from "react-router-dom";//A hook from react-router-dom that allows navigation between different routes in a React application.

const handleDragStart = (e) => e.preventDefault(); 
//This function prevents the default drag behavior when an image in the carousel is dragged. This ensures that images cannot be dragged and dropped.

const HomeCarousel = () => {//functional React component.
  const navigate = useNavigate();//hook is invoked to create a navigate function, to navigate to different routes within the app when an image is clicked.

  const item = homeCarouselData.map((item) => (//array is mapped over to create an array of <img> elements
    <img
      className="cursor-pointer rounded-md"//Adds styling classes like cursor-pointer to change the cursor to a pointer on hover, and rounded-md to give the image rounded corners
      onClick={() => navigate(item.path)}//When the image is clicked, it uses the navigate function to redirect to the corresponding path defined in the homeCarouselData
      src={item.image}//The source (URL) of the image to display.
      alt=""
      onDragStart={handleDragStart}//Calls handleDragStart to prevent dragging of the image.
      role="presentation"//This is a semantic attribute that tells screen readers to ignore the image as it’s being used purely for decoration
    />
  ));

//  mouseTracking: Enables mouse tracking to allow users to swipe or drag to change images.
// items: Takes the array of <img> elements (the carousel items) and displays them in the carousel.
// autoPlay: Enables automatic playing of the carousel (it moves automatically without user interaction).
// infinite: Enables infinite scrolling, meaning the carousel loops back to the first image after the last one.
// autoPlayInterval: The time interval (in milliseconds) between automatic transitions. Here, it's set to 2000ms (2 seconds).
// disableButtonsControls: Disables the default left and right navigation buttons that typically appear on carousels.
  return (
    <AliceCarousel
      mouseTracking
      items={item}
      autoPlay
      infinite
      autoPlayInterval={1000}
      disableButtonsControls
    />
  );
};

export default HomeCarousel;
