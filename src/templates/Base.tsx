import { useEffect, useState } from 'react';

import { Navbar } from '@/navigation/Navbar';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Services } from './Services';
import { Team } from './Team';
import { WhyUs } from './WhyUs';

const backgroundImages = [
  '/assets/images/home/background.jpg',
  'https://res.cloudinary.com/dzj9hndxv/image/upload/v1717816366/20240523_123434_page-0001_1_ocljak.jpg',
  'https://res.cloudinary.com/dzj9hndxv/image/upload/v1718123404/6f5f2598-b63c-4a65-b34a-f319c42321e3_cqxcyc.jpg',
  'https://res.cloudinary.com/dzj9hndxv/image/upload/v1718126071/9f16e921-90b1-4614-965c-f25897684290_avv6d7.jpg',
];

const Base = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length,
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);

  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
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

export { Base };
