"use client";
import React from "react";
import ComponentsNavBottom from "../../../components/ComponentsNavBottom";

const DirectionButton = () => {
  const handleClick = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;

          var destination = "Verde Two Apartemen";
          var url =
            "https://www.google.com/maps/dir/?api=1&origin=" +
            latitude +
            "," +
            longitude +
            "&destination=" +
            encodeURIComponent(destination);

          window.open(url, "_blank");
        },
        function (error) {
          console.log("Error getting the user's location:", error);
          alert(
            "Error getting your location. Please ensure you have allowed location access and try again.",
          );
        },
      );
    } else {
      alert(
        "Geolocation is not available in your browser. You can manually enter your starting location.",
      );
    }
  };

  return (
    <button id="directionButton" onClick={handleClick}>
      <ComponentsNavBottom src="/logos/direction.svg" />
    </button>
  );
};

export default DirectionButton;
