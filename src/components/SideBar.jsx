import Title from './Title';
import NavBar from './NavBar';

const SideBar = () => {
  return (
    <div className="w-70 row-span-2 h-dvh min-w-64 bg-soft-white shadow-lg">
      <Title />
      <NavBar />
    </div>
  );
};

export default SideBar;
