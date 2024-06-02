import { Navbar } from '@/navigation/Navbar';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Services } from './Services';
import { Team } from './Team';
import { WhyUs } from './WhyUs';

const Base = () => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <div className="relative h-[100vh]">
        <img
          src="/assets/images/home/background.jpg"
          alt="Hero"
          className="h-[100vh] w-full object-cover"
        />
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
