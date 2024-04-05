import { useNavigate } from 'react-router-dom';
import useStore from '../store/store';
import useStorage from './useStorage';

const useSession = () => {
  const { saveAtStorage, getFromStorage, emptyStorage } = useStorage();
  const users = getFromStorage('users');
  const navigate = useNavigate();
  const {
    users: storeUsers,
    setLoggedUser,
    addAllUsers,
    removeAllUsers,
  } = useStore((state) => ({
    users: state.users,
    setLoggedUser: state.setLoggedUser,
    addAllUsers: state.addAllUsers,
    addFilterUsersByRole: state.addFilterUsersByRole,
    removeAllUsers: state.removeAllUsers,
  }));

  if (storeUsers.length == 0) {
    addAllUsers(users);
  }
  const login = (data) => {
    try {
      const user = users.find((user) => user.email === data.email);
      if (!user) {
        throw new Error('correoNoRegistrado');
      }

      if (user.password != data.password) {
        throw new Error('passwordIncorrecto');
      }

      setLoggedUser(user);
      saveAtStorage('session', user);

      navigate('/manager');
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const logout = () => {
    removeAllUsers();
    setLoggedUser(null);
    emptyStorage('session');
  };

  return {
    login,
    logout,
  };
};

export default useSession;
