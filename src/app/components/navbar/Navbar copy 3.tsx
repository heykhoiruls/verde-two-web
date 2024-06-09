"use client";
import React, { useState, useCallback } from "react";
import Style from "./navbar.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";

const motionVariants = {
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.1, ease: "easeOut", type: "Spring" },
  },
  closed: {
    opacity: 0,
    transition: { staggerChildren: 0, duration: 0 },
  },
};

const listItemsVariant = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
      staggerChildren: 1,
      when: "afterChildren",
    },
  },
  closed: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 0,
    },
  },
};

const NavbarLink = ({ href, label }: { href: string; label: string }) => (
  <motion.li variants={listItemsVariant}>
    <a href={href}>{label}</a>
  </motion.li>
);

const Navbar = () => {
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);

  const toggleBurgerMenu = useCallback(() => {
    setBurgerMenuActive(!burgerMenuActive);
  }, [burgerMenuActive]);

  const links = [
    { href: "/residences", label: "Residences" },
    { href: "/amenities", label: "Amenities" },
    { href: "/neighborhood", label: "Neighborhood" },
    { href: "/leasing", label: "Leasing" },
    { href: "/about-us", label: "About us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div
      className={`${Style.navbar} ${burgerMenuActive ? Style.active : ""} z-50`}
    >
      <div className={Style.navigation}>
        <Image src={"logos/verde-two-active.svg"} className="h-[70px]" alt="" />

        <div className={Style.burgerMenuContainer} onClick={toggleBurgerMenu}>
          <div className={Style.burgerMenuTrigger}></div>
          <div className={Style.burgerMenu}></div>
        </div>
      </div>
      <div className={Style.content}>
        <motion.ul
          animate={burgerMenuActive ? "open" : "closed"}
          variants={motionVariants}
        >
          {links.map((link, index) => (
            <NavbarLink key={index} href={link.href} label={link.label} />
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Navbar;
