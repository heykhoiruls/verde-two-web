// @ts-nocheck
import React, { useEffect, useState } from "react";
import { ReactBingmaps } from "react-bingmaps";
import "./MapBackground.css"; //
import pushpins from "./pushpins";

const MapBackground = ({ selectedCategory }) => {
  const bingMapsKey =
    "AoNFMMt-p7ltMiWQX4u9yYtS2hzEI7A8StpDFk-7pSu9MwFNek1WeZ4RtXX4DZnm";

  const [isMobile, setIsMobile] = useState(false);

  // Detect if the view is mobile
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  // Filter pushpins based on the selected category
  const filteredPushpins = pushpins.filter((pushpin) => {
    // Customize this condition based on your category logic
    return pushpin.option.category === selectedCategory;
  });

  // Calculate average location as before
  const locations = filteredPushpins.map((pushpin) => pushpin.location);
  const totalLat = locations.reduce((sum, location) => sum + location[0], 0);
  const totalLng = locations.reduce((sum, location) => sum + location[1], 0);
  const avgLat = totalLat / locations.length;
  const avgLng = totalLng / locations.length;

  // Set center based on selected category or use the example center for Mall category
  let center;
  if (selectedCategory === "Mall") {
    center = [-6.205341450767937, 106.84738238336402];
  } else if (selectedCategory === "Restaurant") {
    center = [-6.202042298156587, 106.85416639531617];
  } else if (selectedCategory === "Hospital") {
    center = [-6.2215725516257505, 106.84562695648721];
  } else if (selectedCategory === "School") {
    center = [-6.206774408937579, 106.85372924908198];
  } else if (selectedCategory === "Transit") {
    center = [-6.2082103537655575, 106.84443322488198];
  } else {
    center = [avgLat + 0.0111, avgLng + 0.02];
  }

  // Adjust center for mobile view
  const mobileCenter = [-6.214322680594008, 106.8345630535894];

  return (
    <ReactBingmaps
      bingmapKey={bingMapsKey}
      center={isMobile ? mobileCenter : center}
      zoom={14}
      pushPins={filteredPushpins}
      draggable={true}
    />
  );
};

export default MapBackground;
