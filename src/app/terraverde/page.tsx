"use client";
import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";

const TerraverdePage = () => {
  // Static table rows
  const staticTableRows = [
    { label: "Living & Dining Room", value: null, isBold: true, colSpan: 2 }, // Merge 2 columns for Living & Dining Room
    { label: "Ceiling height", value: "Up to 3 m" },
    { label: "Ceiling", value: "Gypsum board with emulsion paint" },
    { label: "Wall", value: "Lightweight concrete blocks with emulsion paint" },
    { label: "Floor", value: "Imported marble" },

    { label: "Bedroom", value: null, isBold: true, colSpan: 2 }, // Merge 2 columns for Bedroom
    { label: "Ceiling height", value: "Up to 3 m" },
    { label: "Ceiling", value: "Gypsum board with emulsion paint" },
    { label: "Wall", value: "Lightweight concrete blocks with emulsion paint" },
    { label: "Floor", value: "Wood flooring" },
    { label: "Door", value: "Engineered solid wood" },

    { label: "Bathroom", value: null, isBold: true, colSpan: 2 },
    { label: "Ceiling height", value: "Up to 3 m" },
    { label: "Wall", value: "Marble" },
    { label: "Floor", value: "Marble" },
    { label: "Sanitary ware & fittings", value: "TOTO or equivalent" },
    { label: "Vanity top", value: "Imported Marble" },
    { label: "Door", value: "Engineered solid wood" },

    { label: "Service Area", value: null, isBold: true, colSpan: 2 },
    { label: "Ceiling height", value: "Gypsum board with emulsion paint" },
    { label: "Floor", value: "Homogeneous tile" },
    {
      label: "Wet kitchen",
      value: "Counter top, kitchen sink, stove and hood provided",
    },
    { label: "Kitchen cabinet & appliances", value: "Provided" },

    { label: "Maid Area", value: null, isBold: true, colSpan: 2 },
    { label: "Ceiling", value: "Gypsum board with emulsion paint" },
    { label: "Floor", value: "Ceramic tile" },

    { label: "Balcony", value: null, isBold: true, colSpan: 2 },
    { label: "Door", value: "Powder coated aluminium frame laminated glass" },
    { label: "Floor", value: "Homogeneous tile" },

    { label: "Additional items :", value: null, isBold: true, colSpan: 2 },
    {
      label: "Fire Safety",
      value:
        "Smoke / heat detector\nFire alarm and fire extinguisher\nSprinkler & hydran",
    },
    {
      label: "Electric capacity",
      value:
        "3 bedrooms\t16,500 VA\nTelephone\t1 city / line direct\nAir conditioning\tVRF system",
    },

    { label: "Kitchen", value: null, isBold: true, colSpan: 2 },
    { label: "Island kitchen", value: "Caesarstone or equivalent" },
    { label: "Oven", value: "MIELE or equivalent" },
    { label: "Cooking hob & hood", value: "MIELE or equivalent" },
    { label: "Sink", value: "KOHLER or equivalent" },
    { label: "Mixer tap", value: "Dornbacht or equivalent" },
    { label: "Refrigerator", value: "MIELE or equivalent" },
    { label: "Kitchen cabinet", value: "Provided" },

    {
      label: "Wardrobes",
      value: "Built-in wardrobes provided in all bedrooms",
    },
    { label: "Vanity", value: "Vanity provided in all bathrooms" },
    {
      label: "Water heater",
      value: "Hot water supply provided in all bathrooms and kitchen",
    },
  ];

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex h-full w-full text-black">
        {/* Left container */}
        <div className="flex h-full w-[35vw] flex-col justify-center px-4 pt-20">
          <h2 className="px-4 pb-4">Specifications</h2>
          <Table>
            <TableBody>
              {staticTableRows.map((row, index) => (
                <TableRow key={index}>
                  {row.isBold && (
                    <TableCell className="font-bold" colSpan={row.colSpan || 1}>
                      {row.label}
                    </TableCell>
                  )}
                  {!row.isBold && (
                    <>
                      <TableCell className="w-1/3">{row.label}</TableCell>
                      <TableCell>{row.value}</TableCell>
                    </>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {/* Right container */}
        <div className="w-[65vw]">
          <Image
            src={"photos/home/home-hero-7.png"}
            className="h-full w-full object-cover"
            alt="Terraverde"
          />
        </div>
      </div>
    </div>
  );
};

export default TerraverdePage;
