import Header from './Header';
import NavBar from './NavBar';

const SideBar = () => {
  return (
    <div className=" w-70 row-span-2 h-dvh min-w-64 bg-soft-white shadow-lg">
      <Header />
      <NavBar />
    </div>
  );
};

export default SideBar;
