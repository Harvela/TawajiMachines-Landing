import Link from 'next/link';
import React from 'react';
import { CiInstagram, CiLinkedin } from 'react-icons/ci';
import { FaPhoneVolume } from 'react-icons/fa6';
import { LuFacebook } from 'react-icons/lu';

const NavbarGlobal: React.FC = () => {
  return (
    <div className="mx-auto flex w-max flex-row items-center gap-4 rounded-md border border-white px-4 py-2 md:gap-8 md:rounded-lg md:border-2 md:px-8 md:py-3">
      <Link href="" className="text-[14px] text-white md:text-[20px]">
        <FaPhoneVolume />
      </Link>
      <Link href="" className="text-[14px] text-white md:text-[20px]">
        <CiInstagram />
      </Link>
      <Link href="" className="text-[14px] text-white md:text-[20px]">
        <CiLinkedin />
      </Link>
      <Link href="" className="text-[14px] text-white md:text-[20px]">
        <LuFacebook />
      </Link>
    </div>
  );
};

export { NavbarGlobal as TawajiNavbar };
