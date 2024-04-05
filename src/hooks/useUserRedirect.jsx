import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store/store';
import useStorage from './useStorage';

const useUserRedirect = () => {
  const navigate = useNavigate();
  const { setLoggedUser, loggedUser } = useStore((state) => ({
    setLoggedUser: state.setLoggedUser,
    loggedUser: state.loggedUser,
  }));
  const { getFromStorage } = useStorage();
  const loggedUserAtStorage = getFromStorage('session');

  useEffect(() => {
    if (!loggedUserAtStorage) {
      navigate('/login', { replace: true });
    } else {
      setLoggedUser(loggedUserAtStorage);
    }
  }, [navigate]);
};

export default useUserRedirect;
