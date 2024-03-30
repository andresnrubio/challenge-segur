import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="h-18 flex justify-center bg-teal-800">
      <a href="#" className="flex p-2">
        <div className="lg:flex-2 flex items-center gap-x-5">
          <img className="h-14 w-auto" src={logo} alt="" />
          <span className="text-lg  font-medium text-white">Admin users</span>
        </div>
      </a>
    </header>
  );
};
export default Header;
