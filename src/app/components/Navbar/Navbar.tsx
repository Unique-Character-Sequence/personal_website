"use client";

import "./animate_appearing.scss";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { throttle } from "@/app/utils/utils";

const hoverMenuItem = "hover:text-white transition duration-150";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollNoThrottle = () => {
    setPrevScrollPos((prevScrollPos) => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setVisible(false);
        setIsMenuOpen(false);
      } else {
        setVisible(true);
      }
      return currentScrollPos; // Update the state with the current value
    });
  };

  const handleScroll = useCallback(throttle(handleScrollNoThrottle, 200), []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleHamClick = (isOpen: boolean): void => {
    setIsMenuOpen(isOpen);
  };

  return (
    <nav
      id="navbar"
      className={`appearing_transition ${
        visible ? "top-0" : "top-[-100px]"
      } sticky w-full bg-[#121212] bg-opacity-95 z-20`}
    >
      <div className="min-h-[60px] relative transition duration-300 flex flex-wrap items-center mx-auto px-[8vw] py-3.5 justify-between  sm:text-xl lg:text-2xl">
        <Link href={"/"} className="text-white">
          <div className="relative bg-[#252525] w-[50px] h-[50px] flex justify-center rounded-full transition duration-200 hover:scale-105">
            <Image
              src="/images/Memoji_Boy.webp"
              alt="my memoji"
              height={40}
              width={40}
              blurDataURL="/images/Memoji_Boy.webp"
              placeholder="blur"
            />
          </div>
        </Link>
        <div className="hidden sm:flex justify-between text-neutral-300 w-[220px] sm:w-[280px] md:w-[300px] lg:w-[380px]">
          <Link className={hoverMenuItem} href={"#about"}>
            About
          </Link>
          <Link className={hoverMenuItem} href={"#projects"}>
            Projects
          </Link>
          <Link className={hoverMenuItem} href={"#contacts"}>
            Contacts
          </Link>
        </div>
        {isMenuOpen ? (
          <XMarkIcon
            className="w-10 h-10 sm:hidden text-neutral-300 cursor-pointer"
            onClick={() => handleHamClick(false)}
          />
        ) : (
          <Bars3Icon
            className="w-10 h-10 sm:hidden text-neutral-300 cursor-pointer"
            onClick={() => handleHamClick(true)}
          />
        )}
      </div>
      <div
        className={`${
          isMenuOpen === false && "hidden"
        } sm:hidden absolute w-full  bg-[#121212] bg-opacity-95 z-20 text-neutral-300 flex flex-col items-center`}
      >
        <Link className={hoverMenuItem + " text-2xl"} href={"#about"}>
          About
        </Link>
        <Link
          className={hoverMenuItem + " " + "py-8 text-2xl"}
          href={"#projects"}
        >
          Projects
        </Link>
        <Link
          className={hoverMenuItem + " " + "pb-2 text-2xl"}
          href={"#contacts"}
        >
          Contacts
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
