import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import Profile from './Profile/Profile'; 
import SkillsCard from './Skills/Skills';
import Projects from './Projects/Projects';

const CarouselComponent: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const handleScroll = (e: WheelEvent) => {
    const delta = e.deltaY;
    
    if (delta > 0) {
      sliderRef.current?.slickNext();
    } else if (delta < 0) {
      sliderRef.current?.slickPrev();
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    swipe: false, 
  };

  return (
    <Slider ref={sliderRef} {...settings}>
      <Profile/>
      <SkillsCard/>
      <Projects />
      
    </Slider>
  );
};

export default CarouselComponent;
