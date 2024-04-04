import { Link, useLocation, useNavigate } from 'react-router-dom';
import useStore from '../store/store';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentUrl = location.pathname;

  const { loggedUser, setLoggedUser } = useStore((state) => ({
    loggedUser: state.loggedUser,
    setLoggedUser: state.setLoggedUser,
  }));
  const handleLogout = () => {
    setLoggedUser(null);
    navigate('/login');
  };

  return (
    <nav>
      <ol className=" transition-700 mt-8 flex min-w-full flex-col gap-4 text-clip text-nowrap px-8 transition-all delay-500 ease-in-out">
        {loggedUser ? (
          <>
            <li className="group w-full hover:bg-soft-white">
              <button className="hover:bg-indigo-500 mb-4 flex w-full justify-center rounded-md bg-blue-action px-3 py-1.5 text-sm font-semibold leading-8 text-white shadow-sm hover:opacity-75">
                + Nuevo usuario
              </button>
            </li>
            <li className="group w-full hover:bg-soft-white">
              <Link to={'/'} className=" text-blue flex min-w-full justify-between  text-lg " href="">
                Inicio
                <span>🏠</span>
              </Link>
              <div
                className={`bg-blue-linear mt-1 h-1 w-0 opacity-10 transition-all duration-700 ease-in-out group-hover:w-full ${currentUrl === '/' ? 'w-full opacity-75' : ''}`}
              />
            </li>
            <li className="group w-full hover:bg-soft-white">
              <Link to={'/manager'} className="text-blue flex min-w-full justify-between" href="">
                Gestion de usuarios
                <span>👥</span>
              </Link>
              <div
                className={`bg-blue-linear mt-1 h-1 w-0 opacity-10 transition-all duration-700 ease-in-out group-hover:w-full ${currentUrl === '/manager' ? 'w-full opacity-75' : ''}`}
              />
            </li>
            <li className="group w-full hover:bg-soft-white">
              <Link to={'/profile'} className="text-blue flex min-w-full justify-between" href="">
                Perfil
                <span>👤</span>
              </Link>
              <div
                className={`bg-blue-linear mt-1 h-1 w-0 opacity-10 transition-all duration-700 ease-in-out group-hover:w-full ${currentUrl === '/profile' ? 'w-full opacity-75' : ''}`}
              />
            </li>
          </>
        ) : (
          <></>
        )}

        {
          loggedUser ? (
            <li className="group w-full hover:bg-soft-white">
              <button onClick={handleLogout}>Logout</button>
              <div className="bg-blue-linear mt-1 h-1 w-0 opacity-10 transition-all duration-700 ease-in-out group-hover:w-full" />
            </li>
          ) : (
            <></>
          )
          // || (
          //   <li className="group w-full justify-self-end hover:bg-soft-white">
          //     <Link to={'/login'} href="">
          //       Login
          //     </Link>
          //     <div className="bg-blue-linear mt-1 h-1 w-0 opacity-10 transition-all duration-700 ease-in-out group-hover:w-full" />
          //   </li>
          //)
        }
      </ol>
    </nav>
  );
};

export default NavBar;
