import React, { ReactNode } from "react";

interface ListboxWrapperProps {
  children: ReactNode;
}

export const ListboxWrapper: React.FC<ListboxWrapperProps> = ({ children }) => (
  <div className="h-[176px] w-[260px] overflow-y-auto rounded-small border-none px-1 py-2">
    {children}
  </div>
);
