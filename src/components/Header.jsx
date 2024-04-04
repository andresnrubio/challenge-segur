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
    <header className="border-b-blue-linear border-b-1 bg-soft-blue flex h-20 w-full items-center justify-between px-5 py-1 ">
      {/* <a href="#" className="flex w-full items-center  p-5"> */}
      {(loggedUser && (
        <>
          <div className="flex gap-4">
            {/* <button onClick={() => toggleSideBar()}>{isOpen ? '⟪⟪' : '⟫⟫'} </button> */}
            <h2 className="text-blue-linear text-2xl font-bold italic tracking-widest">
              {loggedUser.role.toLocaleUpperCase()}
            </h2>
          </div>
          <div className="lg:flex-2 flex items-center gap-x-5">
            <h3 className="text-blue-linear text-lg font-bold">Hola {loggedUser.name}</h3>
            <Link to={`/profile`} className="group">
              <img
                src={loggedUser.profileImg}
                alt=""
                className="border-blue-linear border-1 h-14 rounded-full bg-blue-100 opacity-90 hover:opacity-100"
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
