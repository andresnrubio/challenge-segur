import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useSession from '../hooks/useSession';
import useSideBar from '../hooks/useSideBar';
import useUserRedirect from '../hooks/useUserRedirect';
import useStore from '../store/store';

const Header = () => {
  useUserRedirect();
  const loggedUser = useStore((state) => state.loggedUser);

  return (
    <header className="fixed z-10 flex h-20 w-full items-center justify-between border-b-1 border-b-blue-linear bg-soft-blue px-5 py-1">
      {/* <a href="#" className="flex w-full items-center  p-5"> */}
      {(loggedUser && (
        <>
          <div className="flex gap-4">
            {/* <button onClick={() => toggleSideBar()}>{isOpen ? '⟪⟪' : '⟫⟫'} </button> */}
            <h2 className="text-2xl font-bold italic tracking-widest text-blue-linear">
              {loggedUser.role.toLocaleUpperCase()}
            </h2>
          </div>
          <div className="lg:flex-2 flex items-center gap-x-5">
            <h3 className="text-lg font-bold text-blue-linear">Hola {loggedUser.name}</h3>
            <Link to={`/profile`} className="group">
              <img
                src={loggedUser.profileImg}
                alt=""
                className="h-14 rounded-full border-1 border-blue-linear bg-blue-100 opacity-90 hover:opacity-100"
              />
            </Link>
            {/* <Link to={'/logout'} href="">
              Logout
            </Link> */}
          </div>
        </>
      )) || (
        <Link to={'/login'} href="">
          Iniciar sesión
        </Link>
      )}
      {/* </a> */}
    </header>
  );
};

export default Header;
