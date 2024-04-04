import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useSession from '../hooks/useSession';
import useSideBar from '../hooks/useSideBar';

const Header = () => {
  const { LoggedUser } = useSession();
  const location = useLocation();
  const currentUrl = location.pathname;

  const user = JSON.parse(localStorage.getItem('user'));

  const { toggleSideBar, isOpen } = useSideBar();

  return (
    <header className="border-b-blue-linear border-b-1 flex h-24 w-full items-center justify-between p-5 shadow-md">
      {/* <a href="#" className="flex w-full items-center  p-5"> */}
      <div className="flex gap-4">
        {/* <button onClick={() => toggleSideBar()}>{isOpen ? '⟪⟪' : '⟫⟫'} </button> */}
        <h2>{currentUrl.slice(1).toLocaleUpperCase()}</h2>
      </div>
      <div className="lg:flex-2 flex items-center gap-x-5">
        {(user?.name && (
          <>
            <h3>Hola {user.name}</h3>
            <Link to={`/profile:${user.id}`} className="group">
              <img src={user.img} alt="" className="h-14 rounded-full bg-blue-100" />
              <p className="opacity-0 transition-all duration-200 group-hover:opacity-90 ">Mi perfil</p>
            </Link>
            {/* <Link to={'/logout'} href="">
              Logout
            </Link> */}
          </>
        )) || (
          <Link to={'/login'} href="">
            Iniciar sesión
          </Link>
        )}
      </div>
      {/* </a> */}
    </header>
  );
};

export default Header;
