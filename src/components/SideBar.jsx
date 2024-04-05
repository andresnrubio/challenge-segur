import Title from './Title';
import NavBar from './NavBar';
import logo from '../assets/logo.png';

const SideBar = () => {
  const isOpen = true;

  return isOpen ? (
    <div className="min-h-vh z-10 row-span-2 h-dvh w-72 min-w-64 bg-soft-blue transition-all duration-700 ease-in-out">
      <Title />
      <NavBar />
    </div>
  ) : (
    <div className="row-span-2 flex h-dvh w-12 min-w-12 justify-center bg-soft-white pt-4 shadow-lg transition-all duration-700 ease-in-out">
      <img src={logo} alt="" className="h-10 w-auto drop-shadow-md" />
    </div>
  );
};

export default SideBar;
