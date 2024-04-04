import { useState } from 'react';
import Main from './components/Main';
import SideBar from './components/SideBar';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex bg-soft-white ">
      <SideBar isOpen={isOpen} />
      <Main toggleSideBar={toggleSideBar} isOpen={isOpen} />
    </div>
  );
}

export default App;
