import Link from 'next/link';
import React from 'react';
import { CiInstagram, CiLinkedin } from 'react-icons/ci';
import { FaPhoneVolume } from 'react-icons/fa6';
import { LuFacebook } from 'react-icons/lu';

const NavbarGlobal: React.FC = () => {
  return (
    <div className="mx-auto flex w-max flex-row items-center gap-8 rounded-lg border-2 border-white px-8 py-3">
      <Link href="" className="text-[20px] text-white">
        <FaPhoneVolume />
      </Link>
      <Link href="" className="text-[20px] text-white">
        <CiInstagram />
      </Link>
      <Link href="" className="text-[20px] text-white">
        <CiLinkedin />
      </Link>
      <Link href="" className="text-[20px] text-white">
        <LuFacebook />
      </Link>
    </div>
  );
};

export { NavbarGlobal as TawajiNavbar };
