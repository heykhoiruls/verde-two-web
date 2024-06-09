import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const ModelSpecification = () => {
  const accordionItems = [
    { key: "1", title: "Living & Dining Room" },
    { key: "2", title: "Bedroom" },
    { key: "3", title: "Bathroom" },
    { key: "4", title: "Service Area" },
    { key: "5", title: "Maid Area" },
    { key: "6", title: "Kitchen" },
    { key: "7", title: "Electric capacity" },
    { key: "8", title: "Additional items" },
  ];

  const generateTableData = (title: string) => {
    // Implement logic to generate table data based on accordion item title
    switch (title) {
      case "Living & Dining Room":
        return [
          { name: "Ceiling height	Up to 3 m" },
          { name: "Gypsum board with emulsion paint" },
          { name: "Wall	Lightweight concrete blocks with emulsion paint" },
        ];
      case "Bedroom":
        return [{ name: "Table3" }, { name: "Table4" }];

      default:
        return []; // Return empty array if no specific data is available
    }
  };

  return (
    <div className="lg:px-[10vw]">
      <h2 className="pb-4">Specification</h2>
      <div className="grid grid-cols-2 gap-4">
        {accordionItems.map((item) => (
          <div key={item.key} className="col-span-1">
            <Accordion
              defaultExpandedKeys={[item.key]}
              className="flex flex-col"
            >
              <AccordionItem
                key={item.key}
                aria-label={`Accordion ${item.key}`}
                title={item.title}
              >
                <Table
                  isStriped
                  aria-label={`Table for ${item.title}`}
                  className="px-8 pb-4"
                >
                  <TableHeader>
                    <TableColumn>NAME</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {generateTableData(item.title).map((data, index) => (
                      <TableRow key={index}>
                        <TableCell>{data.name}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelSpecification;
