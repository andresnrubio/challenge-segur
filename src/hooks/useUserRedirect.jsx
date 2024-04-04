import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store/store';

const useUserRedirect = () => {
  const navigate = useNavigate();
  const loggedUser = useStore((state) => state.loggedUser);

  useEffect(() => {
    if (!loggedUser) {
      navigate('/login');
    }
  }, [loggedUser, navigate]);
};

export default useUserRedirect;
