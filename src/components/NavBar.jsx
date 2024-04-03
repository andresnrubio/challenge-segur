import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ol className=" mt-8 flex min-w-full flex-col gap-4 px-8">
        <li className="group w-full hover:bg-soft-white">
          <Link to={'/'} className=" text-blue flex min-w-full justify-between  text-lg " href="">
            Inicio
            <span>🏠</span>
          </Link>
          <div className="mt-1 h-1 w-0 bg-black opacity-10 transition-all duration-700 ease-in-out group-hover:w-full" />
        </li>
        <li className="group w-full hover:bg-soft-white">
          <Link to={'/board'} className="text-blue flex min-w-full justify-between" href="">
            Consultas
            <span>🔍</span>
          </Link>
          <div className="mt-1 h-1 w-0 bg-black opacity-10 transition-all duration-700 ease-in-out group-hover:w-full" />
        </li>
        <li className="group w-full hover:bg-soft-white">
          <Link to={'/manager'} className="text-blue flex min-w-full justify-between" href="">
            Gestion de usuarios
            <span>👥</span>
          </Link>
          <div className="mt-1 h-1 w-0 bg-black opacity-10 transition-all duration-700 ease-in-out group-hover:w-full" />
        </li>
        <li className="group w-full hover:bg-soft-white">
          <Link to={'/profile'} className="text-blue flex min-w-full justify-between" href="">
            Perfil
            <span>👤</span>
          </Link>
          <div className="mt-1 h-1 w-0 bg-black opacity-10 transition-all duration-700 ease-in-out group-hover:w-full" />
        </li>
        <li className="group w-full hover:bg-soft-white">
          <Link to={'/login'} href="">
            Login
          </Link>
          <div className="mt-1 h-1 w-0 bg-black opacity-10 transition-all duration-700 ease-in-out group-hover:w-full" />
        </li>
        <li className="group w-full hover:bg-soft-white">
          <Link to={'/logout'} href="">
            Logout
          </Link>
          <div className="mt-1 h-1 w-0 bg-black opacity-10 transition-all duration-700 ease-in-out group-hover:w-full" />
        </li>
      </ol>
    </nav>
  );
};

export default NavBar;