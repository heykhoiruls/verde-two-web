"use client";
import Image from "next/image";
import React, { useEffect } from "react";

const DirectionButton = () => {
  useEffect(() => {
    const handleClick = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            console.log("Latitude:", latitude);
            console.log("Longitude:", longitude);

            const mapsUrl = `https://www.google.com/maps/dir/${latitude},${longitude}/Verde+Two+Apartment/@-6.2143076,106.8321199,18z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x2e69f4025da428f3:0x7a92c4ab2485e0eb!2m2!1d106.8345416!2d-6.214568?hl=en-US&entry=ttu`;
            window.open(mapsUrl, "_blank");
          },
          (error) => {
            console.error("Error getting geolocation:", error.message);
          },
        );
      } else {
        console.log("Geolocation is not supported");
      }
    };

    const button = document.getElementById("directionButton");
    if (button) {
      button.addEventListener("click", handleClick);
    }

    return () => {
      if (button) {
        button.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <button id="directionButton">
      <Image
        src="https://ik.imagekit.io/heykhoiruuuls/public/logos/direction.svg"
        alt=""
        loading="lazy"
        className="h-12"
        width={48}
        height={48}
      />
    </button>
  );
};

export default DirectionButton;
