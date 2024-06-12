import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaRegWindowClose } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';
import { scroller } from 'react-scroll';

export type NavbarProps = {
  setOpenModal?: (value: boolean) => void;
};

const NavbarGlobal: React.FC<NavbarProps> = ({ setOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('home');

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
    if (setOpenModal) {
      setOpenModal(!isOpen);
    }
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
    if (setOpenModal) {
      setOpenModal(false);
    }
  };

  const handleSetActive = (section: string) => {
    setActiveMenu(section);
  };

  useEffect(() => {
    scroller.scrollTo('home', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        width: '100%',
        zIndex: 40,
        top: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      }}
    >
      <div className="hidden flex-row items-center justify-between px-4 py-6 md:flex lg:px-16">
        <Link href="#" className="flex flex-row items-center">
          <img
            src="/assets/images/home/logo.png"
            className="h-8 rounded-lg bg-white"
            alt="Logo"
          />
          <h1 className="pl-5 text-2xl font-bold text-white">TAWAJI</h1>
        </Link>
        <div className="flex flex-row gap-8">
          <Link
            href="/#home"
            className={`text-[16px] text-white ${
              activeMenu === 'home' ? 'border-b-2 border-white' : 'text-white'
            }`}
            onClick={() => handleSetActive('home')}
          >
            Acceuil
          </Link>
          <Link
            href="/#about"
            className={`text-[16px] text-white ${
              activeMenu === 'about' ? 'border-b-2 border-white' : 'text-white'
            }`}
            onClick={() => handleSetActive('about')}
          >
            A Propos de nous
          </Link>
          <Link
            href="/#categories"
            className={`text-[16px] text-white ${
              activeMenu === 'categories'
                ? 'border-b-2 border-white'
                : 'text-white'
            }`}
            onClick={() => handleSetActive('categories')}
          >
            Nos Categories
          </Link>
          <Link
            href="/#team"
            className={`text-[16px] text-white ${
              activeMenu === 'team' ? 'border-b-2 border-white' : 'text-white'
            }`}
            onClick={() => handleSetActive('team')}
          >
            Notre equipe
          </Link>
        </div>
        <Link
          href="/#contact"
          className={`rounded-lg bg-primary-700 px-4 py-1 text-white ${
            activeMenu === 'contact'
              ? 'border-2 border-primary-700 bg-black/40'
              : ''
          }`}
          onClick={() => {
            handleCloseMenu();
            handleSetActive('contact');
          }}
        >
          Contact
        </Link>
      </div>

      <div className="flex flex-row gap-5 px-8 py-6 md:hidden">
        <button onClick={handleMenuToggle}>
          <MdMenu className="cursor-pointer text-white/90" size={30} />
        </button>

        <h1 className="text-[24px] text-white/90">Tawaji</h1>
        {isOpen && (
          <div className="absolute left-0 top-0 z-[1000] flex h-[100vh] w-[350px] flex-row justify-between bg-white p-8">
            <div className="mt-12 flex flex-col gap-8">
              <Link
                href="/#home"
                className={`text-lg font-medium text-primary-700 ${
                  activeMenu === 'home'
                    ? 'border-b-2 border-primary-700'
                    : 'text-primary-700'
                }`}
                onClick={() => {
                  handleCloseMenu();
                  handleSetActive('home');
                }}
              >
                Accueil
              </Link>
              <Link
                href="/#about"
                className={`text-lg font-medium text-primary-700 ${
                  activeMenu === 'about'
                    ? 'border-b-2 border-primary-700'
                    : 'text-primary-700'
                }`}
                onClick={() => {
                  handleCloseMenu();
                  handleSetActive('about');
                }}
              >
                A Propos de nous
              </Link>
              <Link
                href="/#categories"
                className={`text-lg font-medium text-primary-700 ${
                  activeMenu === 'categories'
                    ? 'border-b-2 border-primary-700'
                    : 'text-primary-700'
                }`}
                onClick={() => {
                  handleCloseMenu();
                  handleSetActive('categories');
                }}
              >
                Nos categories
              </Link>
              <Link
                href="/#galery"
                className={`text-lg font-medium text-primary-700 ${
                  activeMenu === 'galery'
                    ? 'border-b-2 border-primary-700'
                    : 'text-primary-700'
                }`}
                onClick={() => {
                  handleCloseMenu();
                  handleSetActive('galery');
                }}
              >
                Gallerie
              </Link>
              <Link
                href="/#team"
                className={`text-lg font-medium text-primary-700 ${
                  activeMenu === 'team'
                    ? 'border-b-2 border-primary-700'
                    : 'text-primary-700'
                }`}
                onClick={() => {
                  handleCloseMenu();
                  handleSetActive('team');
                }}
              >
                Equipe
              </Link>
              <Link
                href="/#contact"
                className={`w-[70%] rounded-lg bg-primary-700 px-4 py-1 text-white ${
                  activeMenu === 'contact' ? 'border-2 border-primary-700' : ''
                }`}
                onClick={() => {
                  handleCloseMenu();
                  handleSetActive('contact');
                }}
              >
                Contact
              </Link>
            </div>
            <FaRegWindowClose
              onClick={handleCloseMenu}
              className="h-6 w-6 text-primary-700"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export { NavbarGlobal as Navbar };
