"use client";
import Image from "next/image";
import React, { useEffect } from "react";

const WhatsAppButton = () => {
  useEffect(() => {
    const handleWhatsApp = () => {
      const message = encodeURIComponent(
        "Hello! I am interested in Verde Two apartments. Can you provide more information on the available options?",
      );

      const whatsappUrl = `https://wa.me/6287781181180?text=${message}`;
      window.open(whatsappUrl, "_blank");
    };

    const button = document.getElementById("whatsappButton");
    if (button) {
      button.addEventListener("click", handleWhatsApp);
    }

    return () => {
      if (button) {
        button.removeEventListener("click", handleWhatsApp);
      }
    };
  }, []);

  return (
    <button id="whatsappButton">
      <Image
        src="https://ik.imagekit.io/heykhoiruuuls/public/logos/whatsapp.svg"
        alt=""
        loading="lazy"
        className="h-12"
        width={48}
        height={48}
      />
    </button>
  );
};

export default WhatsAppButton;
