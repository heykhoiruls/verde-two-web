import React, { useEffect } from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { ListboxWrapper } from "@/components/ListboxWrapper";
import { generateData } from "./dataVerdeTwo";

type OnDataSelectedType = (data: any[]) => void;

interface ModelDropdownProps {
  onDataSelected: OnDataSelectedType;
  listChoose: any[]; // Add listChoose prop here
}

const ModelDropdown: React.FC<ModelDropdownProps> = ({
  onDataSelected,
  listChoose,
}) => {
  // Receive listChoose prop
  const [selectedKeys, setSelectedKeys] = React.useState<any>(
    new Set(listChoose && listChoose.length ? [listChoose[0].key] : []),
  );
  const [data, setData] = React.useState<any[]>([]);

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", "),
    [selectedKeys],
  );

  useEffect(() => {
    setData(generateData(selectedValue, listChoose));
  }, [selectedValue, listChoose]);

  React.useEffect(() => {
    onDataSelected(data);
  }, [data, onDataSelected]);

  return (
    <ListboxWrapper>
      <Listbox
        aria-label="Single selection example"
        variant="solid"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        {listChoose &&
          listChoose.map((item) => (
            <ListboxItem key={item.key}>{item.label}</ListboxItem>
          ))}
      </Listbox>
    </ListboxWrapper>
  );
};

export default ModelDropdown;
