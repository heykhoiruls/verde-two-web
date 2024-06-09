"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };
  const links = [
    { href: "/residences", label: "Residences" },
    { href: "/amenities", label: "Amenities" },
    { href: "/neighborhood", label: "Neighborhood" },
    { href: "/leasing", label: "Leasing" },
    { href: "/about-us", label: "About us" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <div className="flex items-center justify-center">
      <div
        className={`fixed top-0 z-50 w-full ${isMenuOpen ? "menu-active" : ""}`}
      >
        <div className=" bg-color-call flex items-center justify-center bg-black bg-opacity-35 backdrop-blur-sm backdrop-filter">
          <div className="hidden w-[45vw] items-center justify-around lg:flex">
            {links.slice(0, 3).map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className={`nav ${pathname == link.href ? "active" : ""}`}
              >
                <h2 className="text-sm">{link.label}</h2>
              </Link>
            ))}
          </div>
          <Link href={"/"}>
            <Image src="logos/verde-two.svg" className="h-[70px]" alt="" />
          </Link>
          <div className="hidden  w-full items-center justify-between px-4">
            <Link href={"/"}>
              <Image src="logos/verde-two.svg" className="h-[70px]" alt="" />
            </Link>
            <Image
              src="menu.svg"
              className={`h-[24px] pe-4 lg:hidden ${
                isMenuOpen ? "hidden" : ""
              }`}
              alt=""
              onClick={toggleMenu}
            />
            <Image
              src="close.svg"
              className={`h-[24px] pe-4 lg:hidden ${
                isMenuOpen ? "" : "hidden"
              }`}
              alt=""
              onClick={toggleMenu}
            />
          </div>

          <div
            className={`hidden w-[45vw] items-center justify-around lg:flex`}
          >
            {links.slice(3).map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className={`nav ${pathname == link.href ? "active" : ""}`}
              >
                <h2 className="text-sm">{link.label}</h2>
              </Link>
            ))}
          </div>
        </div>
        <div className={`${isMenuOpen ? "" : "hidden"}  menu-item space-y-36`}>
          <div className="container pt-10">
            <Link href={"/"} onClick={toggleMenu}>
              <h3>home</h3>
            </Link>
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className={` ${pathname == link.href ? "active" : ""}`}
                onClick={toggleMenu}
              >
                <h3 className="pt-4">{link.label}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
