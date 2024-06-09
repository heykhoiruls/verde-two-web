"use client";
import Image from "next/image";
import React, { useEffect } from "react";

const GoUpperButton = () => {
  const handleGoUpper = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const button = document.getElementById("arrow_up");
    if (button) {
      button.addEventListener("click", handleGoUpper);
    }

    return () => {
      if (button) {
        button.removeEventListener("click", handleGoUpper);
      }
    };
  }, []);

  return (
    <button id="arrow_up">
      <Image
        src="https://ik.imagekit.io/heykhoiruuuls/public/logos/arrow-up.svg"
        loading="lazy"
        alt=""
        className="h-12"
        width={48}
        height={48}
      />
    </button>
  );
};

export default GoUpperButton;
