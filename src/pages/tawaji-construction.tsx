import React, { useEffect, useState } from 'react';

import { Navbar } from '@/navigation/Navbar';
import { Contact } from '@/templates/Contact';
import { Footer } from '@/templates/Footer';
import { Hero } from '@/templates/Hero';
import { Services } from '@/templates/Services';
import { Team } from '@/templates/Team';
import { WhyUs } from '@/templates/WhyUs';

const backgroundImages = [
  '/assets/images/home/background.jpg',
  'https://res.cloudinary.com/dzj9hndxv/image/upload/v1717816366/20240523_123434_page-0001_1_ocljak.jpg',
  'https://res.cloudinary.com/dzj9hndxv/image/upload/v1718123404/6f5f2598-b63c-4a65-b34a-f319c42321e3_cqxcyc.jpg',
  'https://res.cloudinary.com/dzj9hndxv/image/upload/v1718126071/9f16e921-90b1-4614-965c-f25897684290_avv6d7.jpg',
];

const TawajiConstruction = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length,
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <div className="relative h-[100vh]">
        {backgroundImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Background ${index + 1}`}
            className={`absolute left-0 top-0 h-[100vh] w-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute left-0 top-0 mt-[80px] h-[90vh] w-full bg-[#000000]/70">
          <Navbar />
          <Hero />
        </div>
      </div>
      <WhyUs />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default TawajiConstruction;
