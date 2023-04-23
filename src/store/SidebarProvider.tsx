import React, { useState } from 'react';

interface sidebarProviderProps {
  children: React.ReactNode;
}

export const SidebarContext = React.createContext({
  isOpen: true,
  toggleSidebarHandler: () => {},
  openSidebarHandler: () => {},
});

const SidebarProvider: React.FC<sidebarProviderProps> = ({ children }) => {
  const [openSidebar, setOpneSidebar] = useState(true);

  const toggleSidebarHandler = () => {
    setOpneSidebar((prev) => !prev);
  };

  const openSidebarHandler = () => {
    setOpneSidebar(true);
  };

  const sidebarContext = {
    isOpen: openSidebar,
    toggleSidebarHandler,
    openSidebarHandler,
  };

  return <SidebarContext.Provider value={sidebarContext}>{children}</SidebarContext.Provider>;
};

export default SidebarProvider;
