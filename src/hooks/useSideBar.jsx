import { useState } from 'react';

const useSideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, toggleSideBar };
};

export default useSideBar;
