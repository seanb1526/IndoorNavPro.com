import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from 'next/image';
import logo from '../assets/images/logo.svg';

const Navbar = () => {
  const [color, setColor] = useState("transparent");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      setColor("rgba(0,0,0,0.7)");
    } else {
      setColor("transparent");
    }
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-full m-auto flex justify-between items-center px-4 py-2 text-white">
        <Link href="/">
          <Image 
            src={logo} 
            alt="IndoorNav PRO Logo" 
            width={150} 
            height={40} 
            className="logo-white" 
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </Link>
        <ul className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/about">About</Link>
          </li>
          <li className="p-4">
            <Link href="/services">Services</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div
          onClick={() => setShowMenu(!showMenu)}
          className="block sm:hidden cursor-pointer"
        >
          {showMenu ? (
            <AiOutlineClose size={25} />
          ) : (
            <AiOutlineMenu size={25} />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            showMenu
              ? "sm:hidden absolute top-0 left-0 w-full h-screen bg-black/90 flex flex-col justify-center items-center"
              : "hidden"
          }
        >
          <ul>
            <li className="p-4 text-2xl">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 text-2xl">
              <Link href="/about">About</Link>
            </li>
            <li className="p-4 text-2xl">
              <Link href="/services">Services</Link>
            </li>
            <li className="p-4 text-2xl">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;