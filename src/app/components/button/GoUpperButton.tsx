"use client";
import ComponentsNavBottom from "@/components/ComponentsNavBottom";
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
      <ComponentsNavBottom src="/logos/arrow-up.svg" />
    </button>
  );
};

export default GoUpperButton;
